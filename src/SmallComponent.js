import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Favorite, Share, MoreVert } from "@mui/icons-material";

// Import your profile image in images folder
import myImg from "./images/sm.jpg";

// Import your background image in images folder
import backImg2 from "./images/sm.jpg";
import Switch from "@mui/material/Switch";

const useStyles = makeStyles((theme) => ({
  // Styling material components
  root: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    height: 180,
	// width: 150,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SmallComponent({ toggleDark, settoggleDark }) {
  const classes = useStyles();

  // Trigger toggle using onChange Switch
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Card elevation={8}>
        {/* you can modify the image avatar,
		background and title name to yours*/}
        <CardHeader
          avatar={<Avatar alt="Yashwant Lande" src={myImg} />}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Yashwant Lande"
          subheader="Yash"
        />
        <CardMedia
          className={classes.media}
          image={backImg2}
          title="Guruji"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Iauro : Dark Mode
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          {/* switching between dark and light mode */}
          <Switch
            checked={toggleDark}
            onChange={handleModeChange}
            name="toggleDark"
            color="default"
          />
        </CardActions>
      </Card>
    </Grid>
  );
}
