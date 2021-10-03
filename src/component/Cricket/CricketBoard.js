import { Table, TableBody, TableCell, makeStyles , TableHead, TableRow, Button } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import { getCricket  , deleteuser} from '../../Services/api';
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    table:{
        width:'90%',
        margin:"auto",
        marginTop:'60px'
    },

    thead:{
    
      backgroundColor:"blue",  
    },

    TableCell:{
        color:"#fff",
    }
})

function CricketBoard() {

    const classes = useStyle();


  const [cricketer , setCricketer] = useState([]);


    const getAllCricket = async () =>{
        const response = await getCricket();
          setCricketer(response.data);
        console.warn(response.data);
    }

    const userDelete = async (id) =>{
            await deleteuser(id);
            getAllCricket();
    }

    useEffect(() =>{
        getAllCricket();
    },[]);


    return (
      
               <Table className={classes.table} >
             <TableHead>
                  <TableRow className={classes.thead} >
                       <TableCell className={classes.TableCell} >ID</TableCell>
                       <TableCell className={classes.TableCell} >Name</TableCell>
                       <TableCell className={classes.TableCell} >UserName</TableCell>
                       <TableCell className={classes.TableCell} >Email</TableCell>
                       <TableCell className={classes.TableCell} >Phone</TableCell>
                       <TableCell className={classes.TableCell} >Action</TableCell>
                  </TableRow>
             </TableHead>
             <TableBody>

                  {
                      cricketer.map(cricketer  =>{
                          return(
                             <TableRow key={cricketer.id}>
                                 <TableCell>{cricketer.id}</TableCell>
                                 <TableCell>{cricketer.name}</TableCell>
                                 <TableCell>{cricketer.username}</TableCell>
                                 <TableCell>{cricketer.email}</TableCell>
                                 <TableCell>{cricketer.phone}</TableCell>
                                 <TableCell>
                                     <Button variant="contained" color="primary" component={Link}  to={`/edit-user/${cricketer.id}`}   style={{marginRight:"10px"}} >EDIT</Button>
                                     <Button variant="contained" color="secondary"  onClick={() => userDelete(cricketer.id)}>DELETE</Button>
                                 </TableCell>
                             </TableRow>

                          )
                      })
                  }
             </TableBody>
         </Table>
      
        
    )
}

export default CricketBoard
