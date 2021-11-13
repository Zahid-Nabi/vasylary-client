import { Avatar, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import DeleteIcon from '@mui/icons-material/Delete';



const ManageProducts = () => {

    const [manageProducts, setManageProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setManageProducts(data));
    }, [deleteProduct]);

    const handleDelete = (id) => {
        const deleteConfirm = window.confirm("Are you really want to delete the product?");
        if (deleteConfirm) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        setDeleteProduct(result.deletedCount);
                        alert('Product Deleted Successfully');
                    }
                })
        }

    };


    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '95%', maxWidth: '1000px', textAlign: 'center' }}>
                    <Typography variant="h4" style={{ marginBottom: '30px' }}>Manage All Products</Typography>
                    <Table className="table">
                        <Thead className="thead">
                            <Tr className="trow">
                                <Th>Sl No.</Th>
                                <Th>Product Image</Th>
                                <Th>Product Name</Th>
                                <Th>Product Price</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody className="tbody">
                            {
                                manageProducts.map((manageProduct, index) => <Tr className="trow">
                                    <Td>{index + 1}</Td>
                                    <Td><Avatar style={{ margin: '5px auto' }} alt={manageProduct.product} src={manageProduct.imgURL} /></Td>
                                    <Td>{manageProduct.product_name}</Td>
                                    <Td>{manageProduct.price}</Td>
                                    <Td>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => { handleDelete(manageProduct._id) }} aria-label="delete">
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

export default ManageProducts;