/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
// import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          component={RouterLink}
          to='/about'
          color="transparent"
          className={classes.navLink}
        >
        ABOUT US
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={RouterLink}
          to='/approach'
          color="transparent"
          className={classes.navLink}
        >
        APPROACH
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={RouterLink}
          to="/work"
          color="transparent"
          className={classes.navLink}
        >
        WORK
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          className={classes.navLink}
        >
        CAREERS
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          className={classes.navLink}
        >
        LET'S TALK
        </Button>
      </ListItem>
    </List>
  );
}
