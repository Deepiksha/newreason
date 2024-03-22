import { AppBar, Button, Grid } from '@mui/material'
import React from 'react'

const Footer = ()=> {
  return (
    <div>
<AppBar position="fixed" sx={{ top: 'auto', bottom: 0,height:'2rem', display:'flex',
          backgroundColor:'#223c5c'}}>
    <Grid container sx={{mx:1,display:'flex'}} >
    <Button variant='contained' size='medium' > Submit </Button>
    <Button variant='contained'> Cancel </Button> 
    </Grid>
    </AppBar>
    </div>
  )
}

export default Footer