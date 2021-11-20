import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardContent";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "white",
      borderColor: "rgba(255, 99, 132)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      color: "white",
    },
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default function BasicCard() {
  return (
    <Grid item style={{ padding: "10px" }}>
      <CardHeader>
        <div style={{ color: "white" }}>Carbon Footrprint CO2</div>
        <Button size="small">Add Service</Button>
      </CardHeader>
      <CardContent style={{ opacity: "100%" }}>
        <LineChart />
      </CardContent>
    </Grid>
  );
}
