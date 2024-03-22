import { Box, Button, Grid } from '@mui/material';

const Sidebar = ({ onClick }) => {
  const handleClick = (start) => {
    onClick(start);
  };
 

  const renderButtons = () => {
    const buttons = [];
    
    for (let i = 0; i < 10; i++) {
      const startValue = 1000 + i * 100;
      buttons.push(
          <Grid item  key={i} sx={{mx:2,pt:3}}>
          <Button variant='outlined' onClick={() => handleClick(startValue)}> {startValue}-{startValue + 99}</Button>
          </Grid>
      );
    }
    return buttons;
  };

  return (
    <div>
    <Grid sx={{backgroundColor:'red',marginTop:13,width:'140px',height:'85vh'}}>
    <Button variant="contained" size='small' color='secondary' sx={{mx:1,mt:2}}> GoldenWinLot </Button>
      {renderButtons()}
    </Grid>
    </div>
  );
}
export default Sidebar;