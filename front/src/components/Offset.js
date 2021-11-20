import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardContent";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function BasicCard() {
  return (
    <Card style={{ padding: "10px", backgroundColor: "rgb(255, 99, 0)" }}>
      <CardHeader>Offset</CardHeader>
      <CardContent>I am offset</CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
