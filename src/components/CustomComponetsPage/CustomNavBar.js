import React from 'react';
// import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

// Component
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks"

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);


export default function CustomNavBar(props){
    const classes = useStyles();
    const { ...rest } = props;
    return(
        <div id="navbar" className={classes.navbar}>
            <div>
            <Header
                brand="Roomie IT"
                component={RouterLink}
                to='/'
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                height: 700,
                color: "dark"
                }}
                {...rest}
            />
            </div>
        </div>
    );
};
// {/* <Header
//     brand="Navbar with profile"
//     rightLinks={
//       <List className={classes.list}>
//         <ListItem className={classes.listItem}>
//           <Button
//             href="#pablo"
//             className={classes.navLink}
//             onClick={e => e.preventDefault()}
//             color="transparent"
//           >
//             Discover
//           </Button>
//         </ListItem>
//         <ListItem className={classes.listItem}>
//           <Button
//             href="#pablo"
//             className={classes.navLink}
//             onClick={e => e.preventDefault()}
//             color="transparent"
//           >
//             Wishlist
//           </Button>
//         </ListItem>
//         <ListItem className={classes.listItem}>
//           <Button
//             href="#pablo"
//             className={classes.registerNavLink}
//             onClick={e => e.preventDefault()}
//             color="rose"
//             round
//           >
//             Register
//           </Button>
//         </ListItem>
//       </List>
//     }
//   /> */}
