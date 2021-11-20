import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Graph from "./Graph.js";
import List from "./List.js";
import Offset from "./Offset.js";
import { Grid } from "@mui/material";

export default class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  addService = async (params) => {
    await axios
      .get("/api/motor_api/", {
        params: params,
      })
      .then((response) => {
        this.setState({
          services: this.state.services.push(response.data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Card
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          width: "100%",
          height: "1200px",
          marginBot: "-40px",
        }}
      >
        <CardContent style={{ width: "100%" }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={3}
            style={{ width: "100%" }}
          >
            <Grid item style={{ width: "100%" }} spacing={3}>
              <Graph addService={this.addService} {...this.state} />
            </Grid>

            <Grid item style={{ width: "100%" }} spacing={3}>
              <List {...this.state} />
            </Grid>

            <Grid item style={{ width: "100%" }} spacing={3}>
              <Offset {...this.state} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
