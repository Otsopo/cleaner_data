import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: null
    };
  }
  render() {
    return(
      <>
      
      <Grid container spacing={2}>
  <Grid item xs={8}>
  <Button variant="contained">Hello World</Button>
  </Grid>
  <Grid item xs={4}>
  <Button variant="contained">Hello World</Button>
  </Grid>
  <Grid item xs={4}>
  <Button variant="contained">Hello World</Button>
  </Grid>
  <Grid item xs={8}>
  <Button variant="contained">Hello World</Button>
  </Grid>
</Grid>
</>
    )
  }
}

export default App;
