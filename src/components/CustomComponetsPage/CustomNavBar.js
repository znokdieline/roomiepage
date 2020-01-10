import React from 'react';
// import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';

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
