import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Graph from "./Graph.js";
import List from "./List.js";
import Offset from "./Offset.js";
import { Grid } from "@mui/material";

export default function BasicCard() {
  return (
    <Card style={{ backgroundColor: "black", width: "100%" }}>
      <CardContent style={{ width: "100%" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={3}
          style={{ width: "100%" }}
        >
          <Grid item style={{ width: "100%" }} spacing={3}>
            <Graph />
          </Grid>

          <Grid item style={{ width: "100%" }} spacing={3}>
            <List />
          </Grid>

          <Grid item style={{ width: "100%" }} spacing={3}>
            <Offset />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
