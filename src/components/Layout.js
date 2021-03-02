import React from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "#E69532",
  },
  email: {
    justifyContent: "center",
    alignItems: "center",
  },
  subtext: {
    color: theme.palette.text.secondary,
  },
  header: {
    height: "50%",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flexGrow: 0.5,
    display: "flex",
    fontFamily: "Raleway",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  info: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 35,
    color: "white",
    padding: "18px 36px",
    fontSize: "18px",
  },
  applybutton: {
    backgroundColor: "orange",
    color: "white",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5} classes={classes.header}>
        <Grid item xs={3}>
          <Typography>FOX.</Typography>
          <Typography>UNIVERSITY</Typography>
        </Grid>
        <Grid item xs={3} className={classes.email}>
          <Grid container alignItems="center">
            <Grid item className={classes.icon}>
              <SendIcon />
            </Grid>
            <Grid item>
              <Typography align="left">Email</Typography>
              <Typography align="left" className={classes.subtext}>
                youremail@email.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container alignItems="center">
            <Grid item className={classes.icon}>
              <CallIcon />
            </Grid>
            <Grid item>
              <Typography align="left">Call</Typography>
              <Typography align="left" className={classes.subtext}>
                Call Us: +1235 2355 98
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.applybutton}
          >
            Apply Now
          </Button>
        </Grid>
      </Grid>

      {/*AppBar*/}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Home
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            About
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Courses
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Staff
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Block
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Contact
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.info}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="h2">Education Needs</Typography>
            <Typography variant="h2" paragraph="true">
              Complete Solution
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="left" paragraph="true">
              A small river named Duden flows by their place and supplies it
              with <br /> the necessary regelialia
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Button variant="contained" className={classes.button}>
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Layout;
