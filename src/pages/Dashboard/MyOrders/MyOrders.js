import { Avatar, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useAuth from '../../../hooks/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';
import './myOrders.css';


const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(0);
    useEffect(() => {
        fetch(`https://pure-wave-29914.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [user.email, deleteOrder]);

    const handleDelete = (id) => {
        const deleteConfirm = window.confirm("Are you really want to delete order?");
        if (deleteConfirm) {
            fetch(`https://pure-wave-29914.herokuapp.com/deleteOrder/${id}`, {
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

    }

    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '95%', maxWidth: '1000px', textAlign: 'center' }}>
                    <Typography variant="h4" style={{ marginBottom: '30px' }}>My Orders</Typography>
                    <Table className="table">
                        <Thead className="thead">
                            <Tr className="trow">
                                <Th>Sl No.</Th>
                                <Th>Product Image</Th>
                                <Th>Product Name</Th>
                                <Th>Price</Th>
                                <Th>Status</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody className="tbody">
                            {
                                myOrders.map((myOrder, index) => <Tr className="trow">
                                    <Td>{index + 1}</Td>
                                    <Td><Avatar style={{ margin: '5px auto' }} alt={myOrder.product} src={myOrder.imgURL} /></Td>
                                    <Td>{myOrder.product}</Td>
                                    <Td>${myOrder.price}</Td>
                                    <Td>{myOrder.status}</Td>
                                    <Td>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => { handleDelete(myOrder._id) }} aria-label="delete">
                                                <DeleteIcon style={{ color: 'var(--dark-brown)' }} />
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

export default MyOrders;