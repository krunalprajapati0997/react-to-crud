import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams,Link } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';
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

const EditUser = () => {
    const { id } = useParams();
    let history = useHistory();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profile,setProfile] = useState([]);
    const classes = useStyles();
  

    useEffect(() => {
        
      
    }, [])
    
    const update = () => {
        
        let FD = new FormData();
        FD.append('name', name);
        FD.append('username', username);
        FD.append('email', email);
        FD.append('phone', parseInt(phone));
        FD.append('profile_file', profile[0]);
        console.log("profile", profile);
        axios.put(`http://localhost:6009/${id}`, FD)
        history.push('/all')
    }

   return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
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
                
                <Button variant="contained" color="primary" onClick={update} type='submit'><Link to="/all">Add User</Link></Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;