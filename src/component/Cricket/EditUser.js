import { Button, FormControl, FormGroup, InputLabel ,Input , makeStyles, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import React from 'react'
import { edituser, getCricket } from '../../Services/api'
import { useHistory , useParams } from 'react-router'

const useStyle = makeStyles({
    FormGroup:{
        width:"60%",
        margin:"auto",
        marginTop:"60px",
        '& > *':{
            marginTop:20
        }
    },
  

})

const initialvalues = {
    name:'',
    username:'',
    email:'',
    phone:'',
}



function EditUser() {

    const classes = useStyle();

     const {id} = useParams();

   const [user , setUser] = useState(initialvalues);
   const {name , username, email , phone} = user;

   useEffect(() =>{
       loaduser();
   },[]);

   const loaduser =  async () =>{
       const response = await  getCricket(id);
       setUser(response.data);
   }

   const oninputChange = (e) =>{
         setUser({...user, [e.target.name]: e.target.value});
   }
 
   const history = useHistory();

   const edituserdetails = async () =>{
       await edituser(id,  user);
       history.push("/");
       
   }

    return (
        <div>
             <FormGroup  className={classes.FormGroup} >
                 <Typography variant="h4">Update User</Typography>
                 <FormControl>
                     <InputLabel>Name</InputLabel>
                     <Input  
                       name='name'
                       value={name}
                       onChange={(e) => oninputChange(e)} 
                     />
                 </FormControl>
                 <FormControl>
                     <InputLabel>UserName</InputLabel>
                     <Input
                     name='username'
                     value={username}
                     onChange={(e) => oninputChange(e)} 
                     />
                 </FormControl>
                 <FormControl>
                     <InputLabel>Email</InputLabel>
                     <Input
                     name='email'
                     value={email}
                     onChange={(e) => oninputChange(e)} 
                     />
                 </FormControl>
                 <FormControl>
                     <InputLabel>Phone</InputLabel>
                     <Input
                     name='phone'
                     value={phone}
                     onChange={(e) => oninputChange(e)} 
                     />
                 </FormControl>
                 <Button variant="contained"  onClick={() => edituserdetails()} color="primary">Add User</Button>
             </FormGroup>
        </div>
    )
}

export default EditUser;
