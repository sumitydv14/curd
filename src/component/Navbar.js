import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import React from 'react'

const useStyle = makeStyles({
    a:{
        textDecoration:'none',
        marginLeft:'20px',
        color:"#ffffff"
        
    }
})

function Navbar() {
    const classes = useStyle(); 

    return (
        <div>
             <AppBar  position="static">
                 <Toolbar>
                     <NavLink  className={classes.a}  to="/" >Cricket Record</NavLink>
                
                     <NavLink className={classes.a} to="/add-user">Add User</NavLink>
                 </Toolbar>
             </AppBar>
        </div>
    )
}

export default Navbar
