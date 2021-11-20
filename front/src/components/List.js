import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardContent";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

export default function BasicCard() {
  return (
    <Grid item style={{ padding: "10px", width: "100%" }}>
      <List sx={{ width: "100%", backgroundColor: "rgb(255, 99, 0,0)" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "gray" }}>OP</Avatar>
          </ListItemAvatar>
          <ListItemText style={{ color: "white" }} primary="Service 1" />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </ListItemAvatar>
          <ListItemText style={{ color: "white" }} primary="Service 2" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </ListItemAvatar>
          <ListItemText style={{ color: "white" }} primary="Service 3" />
        </ListItem>
      </List>
    </Grid>
  );
}
