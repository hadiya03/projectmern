import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
     <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={5} sx={{ padding: 10, width: 300 }}>
        <Typography variant="h5" align="center" gutterBottom>
          SIGNUP PAGE
        </Typography>
        
        <TextField label="Name" type="text" fullWidth margin="normal" />
        <TextField label="Address" type="text" fullWidth margin="normal" />
        <TextField label="Phone" type="text" fullWidth margin="normal" />
        <TextField label="E-mail" type="text" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        
        <Button variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
          SIGNIN
        </Button>
      </Paper>
    </Box>
  );
};
  

export default Signup
/*<div>
        <h1>SIGNUP PAGE</h1>
        <TextField label="name" variant="filled"/><br /><br />
        <TextField label="Address" varient="filled"/><br /><br />
        <TextField label="phone" varient="filled"/><br /><br />
        <TextField label="e-mail" varient="filled"/><br /><br />
        <TextField label="password" varient="filled" type='password'/><br /><br />
        <Button variant="contained" color="primary">SIGNUP</Button>
    </div>*/