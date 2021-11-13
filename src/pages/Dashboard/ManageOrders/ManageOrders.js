import { Avatar, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './manageOrders.css';


const ManageOrders = () => {

    const [manageOrders, setManageOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(0);
    const [modifyOrder, setModifyOrder] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setManageOrders(data));
    }, [deleteOrder, modifyOrder]);

    const handleDelete = (id) => {
        const deleteConfirm = window.confirm("Are you really want to delete order?");
        if (deleteConfirm) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        setDeleteOrder(result.deletedCount);
                        alert('Order Deleted Successfully');
                    }
                })
        }

    };

    const handleShipped = (id) => {
        const shippedConfirm = window.confirm("Is the order shipped?");
        if (shippedConfirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        setModifyOrder(result.modifiedCount);
                        alert('Order Shipped Successfully');
                    }
                })
        }
    }

    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '95%', maxWidth: '1000px', textAlign: 'center' }}>
                    <Typography variant="h4" style={{ marginBottom: '30px' }}>Manage All Orders</Typography>
                    <Table className="table">
                        <Thead className="thead">
                            <Tr className="trow">
                                <Th>Sl No.</Th>
                                <Th>Product Image</Th>
                                <Th>Product Name</Th>
                                <Th>User Name</Th>
                                <Th>User Email</Th>
                                <Th>Status</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody className="tbody">
                            {
                                manageOrders.map((manageOrder, index) => <Tr className="trow">
                                    <Td>{index + 1}</Td>
                                    <Td><Avatar style={{ margin: '5px auto' }} alt={manageOrder.product} src={manageOrder.imgURL} /></Td>
                                    <Td>{manageOrder.product}</Td>
                                    <Td>{manageOrder.name}</Td>
                                    <Td>{manageOrder.email}</Td>
                                    <Td>{manageOrder.status}</Td>
                                    <Td>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => { handleDelete(manageOrder._id) }} aria-label="delete">
                                                <DeleteIcon style={{ color: 'var(--dark-brown)' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Shipped">
                                            <IconButton onClick={() => { handleShipped(manageOrder._id) }} aria-label="shipped">
                                                <CheckCircleIcon style={{ color: 'var(--blue)' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Td>
                                </Tr>)
                            }
                        </Tbody>
                    </Table>
                </Box>
            </Container>
        </div>
    );
};

export default ManageOrders;