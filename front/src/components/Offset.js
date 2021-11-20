import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardContent";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function BasicCard() {
  return (
    <Card style={{ padding: "10px", backgroundColor: "rgb(255, 99, 0,0)" }}>
      <Stack direction="row" spacing={2}>
        <div style={{ color: "white", fontSize: 25 }}>At this rate</div>
      </Stack>
      <CardContent style={{ color: "white" }}>Something happens</CardContent>
    </Card>
  );
}
