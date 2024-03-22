import React from 'react';
import { Button,Grid,Box, Typography,TextField, FormControl,Toolbar,AppBar} from '@mui/material';


const Navbar =() => { 
    return(
        <>
           <AppBar position="fixed" sx={{height:'7%',backgroundColor:'#223c5c'}}>
           <Box sx={{display:"flex",alignItems:"center",p:2,gap:3,mt:-1}}>
           <Typography  variant="h6"> Result 06:30  </Typography>
            <Button variant="outlined" color="inherit"> 1047 </Button>  
            <Button variant="outlined" color="inherit" > 1149 </Button>
            <Button variant="outlined" color="inherit" > 1272 </Button>
            <Button variant="outlined" color="inherit"> 1305 </Button>
            <Button variant="outlined" color="inherit"> 1451 </Button>
            <Button variant="outlined" color="inherit"> 1548 </Button>
            <Button variant="outlined" color="inherit"> 1619 </Button>
            <Button variant="outlined" color="inherit"> 1700</Button>
            <Button variant="outlined" color="inherit"> 1810 </Button>
            <Button variant="outlined" color="inherit"> 1996</Button>
            </Box>
         <Grid sx={{backgroundColor:'red',mt:-1}}>
        <TextField label="Account" />
       <TextField label="Result"/>
       <TextField label="Reprint"/>
       <TextField label="Cancel"/>
       <TextField label="Password"/>
       <TextField label="Clear Cache"/>
       <TextField label="log Off"/>
      </Grid>
        </AppBar>  
     </>
    )
}
export default Navbar