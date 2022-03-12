import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
// import { useHistory,useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios'






const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})




const AddUser = () => {
    // let history = useHistory();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profile,setProfile] = useState([]);
    const classes = useStyles();

    const postData = () => {
        let FD = new FormData();
        FD.append('name', name);
        FD.append('username', username);
        FD.append('email', email);
        FD.append('phone',parseInt(phone));
        FD.append('profile_file', profile[0]);
        console.log("profile", profile);
        axios.post('http://localhost:6009', FD)
    }

   
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input placeholder='name' onChange={(e) => setName(e.target.value)} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input placeholder='username' onChange={(e) => setUsername(e.target.value)} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input placeholder='email' onChange={(e) => setEmail(e.target.value)} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input placeholder='phone' onChange={(e) => setPhone(e.target.value)} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Profile</InputLabel>
                <Input  placeholder='profile' type='file' name='profile_file' onChange={(e) => setProfile(e.target.files)}  id="my-input" />
            </FormControl>
            <FormControl>
                
                <Button variant="contained" color="primary" onClick={postData} type='submit'><Link to="/all">Add User</Link></Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;