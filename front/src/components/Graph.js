import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardContent";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Line } from "react-chartjs-2";
import Stack from "@mui/material/Stack";

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "service 1",
          data: [12, 19, 3, 5, 2, 3],
          fill: true,
          backgroundColor: "rgba(255, 99, 132)",
          borderColor: "rgba(255, 99, 132)",
        },
        {
          label: "service 2",
          data: [1, 1, 3, 5, 20, 30],
          fill: true,
          backgroundColor: " RGB(215, 185, 107)",
          borderColor: " RGB(215, 185, 107)",
        },
        {
          label: "service 3",
          data: [3, 2, 3, 5, 1, 3],
          fill: true,
          backgroundColor: "RGB(131, 185, 112)",
          borderColor: "RGB(131, 185, 112)",
        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const LineChart = () => (
      <>
        <Line data={data} options={options} />
      </>
    );
    return (
      <Grid item style={{ padding: "10px" }}>
        <CardHeader>
          <Stack direction="row" spacing={2}>
            <div style={{ color: "white", fontSize: 25 }}>
              Carbon Footprint CO2
            </div>
            <Button
              style={{ backgroundColor: "red" }}
              variant="contained"
              onClick={this.props.addService({ region: "us-east4" })}
            >
              Add Service
            </Button>
          </Stack>
        </CardHeader>
        <CardContent style={{ opacity: "100%" }}>
          <LineChart />
        </CardContent>
      </Grid>
    );
  }
}

export default Graph;
