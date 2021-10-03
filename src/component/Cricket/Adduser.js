import { Button, FormControl, FormGroup, InputLabel ,Input , makeStyles, Typography } from '@material-ui/core'
import { useState } from 'react'
import React from 'react'
import { adduser } from '../../Services/api'
import { useHistory } from 'react-router'

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



function Adduser() {

    const classes = useStyle();

   const [user , setUser] = useState(initialvalues);
   const {name , username, email , phone} = user;

   const oninputChange = (e) =>{
         setUser({...user, [e.target.name]: e.target.value});
   }
 
   const history = useHistory();

   const adduserdetails = async () =>{
       await adduser(user);
       history.push("/");
       
   }

    return (
        <div>
             <FormGroup  className={classes.FormGroup} >
                 <Typography variant="h4">Add User</Typography>
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
                 <Button variant="contained"  onClick={() => adduserdetails()} color="primary">Add User</Button>
             </FormGroup>
        </div>
    )
}

export default Adduser
