import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Master from "./components/Master.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={8}>
            <Master></Master>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
