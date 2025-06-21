import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar position='absolute'> 
            <Toolbar>
                <Typography variant="h5"   sx={{ml:2}}>CONTACT_BOOK APP</Typography>
                <Box sx={{marginLeft:'auto'}}>
                <Link to="/Login">
                <Button variant="contained" color='inherit'>Login</Button> 
                </Link>&nbsp;

                <Link to="/Signup">
                <Button variant="contained" color='inherit'>Signup</Button>
                </Link>&nbsp;

                 </Box>
    

                
            </Toolbar>
        </AppBar>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default NavBar
