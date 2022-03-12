import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers } from '../Service/api';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import { dialogContentTextClasses } from '@mui/material';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        axios.get('http://localhost:6009')
            .then(res => {
                setUsers(res.data.data)
            })
    }, [])

        

        function deleteUser(id) {
            if(id == undefined || id == null) {
                alert("id not found");
            } else {
                console.log(id);
                axios.delete(`http://localhost:6009/${id}`, {}).then((result) => {
                    console.log("result.data", result);
        
                })
            }
    
        }

        

        
        
    const deleteUserData = async (id) => {
        await deleteUser(id);   
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response)
        // setUsers(response.data);
    }


    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    {/* <TableCell>Id</TableCell> */}
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Profile</TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user.id}>
                        {/* <TableCell>{user._id}</TableCell>  */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        

                        <TableCell><img src={user.profile_url} width="100" height="100" alt=""></img></TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllUsers;