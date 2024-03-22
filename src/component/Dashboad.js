import React from 'react'
import { useState } from 'react'
import { Grid,TextField } from '@mui/material';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Dashboard = () => {
  const [startValue, setStartValue] = useState(1000);

  const handleRangeClick = (start) => {
    setStartValue(start);
  };

  const renderTextFields = () => {
    const textFields = [];
    for (let i = 0; i < 100; i++) {
      const value = startValue + i;
      textFields.push(
        <Grid item sx={{mt:2,mx:1}} key={i} md={1}>
          <TextField label={`${value}`} value={value} variant="outlined" sx={{width:95, height:25}}/>
        </Grid>
      );
    }
    return textFields;
  };

  return (
    <div style={{display:"flex"}}>
      <Sidebar onClick={handleRangeClick} />
     
      <Grid container marginTop={12} padding={1} sx={{height:'80vh'}}>
        {renderTextFields()}
      </Grid>
    </div>
  );
};


export default Dashboard;