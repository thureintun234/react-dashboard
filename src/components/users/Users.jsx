import React, { useEffect, useState } from 'react'
import userService from '../../service/user'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Users = () => {
    const [users, setUsers] = useState([])

    const editStyle = {
        backgroundColor: '#5cbd59',
        color: 'white'
    };

    const deleteStyle = {
        backgroundColor: 'red',
        color: 'white'
    }

    useEffect(() => {
        userService
            .getAll()
            .then(returnedObject => setUsers(returnedObject))
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'transaction', headerName: 'Transaction', width: 100 },
        {
            field: 'actions', headerName: 'Actions', width: 200, renderCell: (params) => {
                // you will find row info in params
                return <div>
                    <Button style={editStyle} variant='contained' size='small'>Edit</Button>
                    <span> </span>
                    <Button style={deleteStyle} variant='contained' size='small'>Delete</Button>
                </div>
            }
        }
    ];

    // const rows = []

    const rows = users?.map(user => ({
        id: user.id,
        username: user.username,
        email: user.email,
        status: user.status == 0 ? 'Inactive' : 'Active',
        transaction: user.transaction,
    }))

    console.log(users)

    return (
        <div>
            <div style={{ height: 480, width: '80%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Users