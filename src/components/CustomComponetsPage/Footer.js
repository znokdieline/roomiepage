import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


import Button from 'components/CustomButtons/Button';


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Footer (props){
    const classes = useStyles();
    return(
        <div width="100%" height="100%" style={{color: 'white', backgroundColor:'#232424'}} className={classes.main}>
            <div>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={6}>
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.typo}>
                        <h1 style={{fontWeight: 'bold'}}>We're always thinking about the future of IoT & Wearables</h1>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
                    color="red"
                    size="lg"
                    href="/"
                    target="_blank"
                    >
                    Read about our approach and services
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                </Grid>
                <Grid item xs={6} sm={3}>
                    
                </Grid>
                <Grid item xs={6} sm={3}>
                <h5>BLOG  PRIVACY POLICY</h5>
                </Grid>
                <Grid item xs={6} sm={3}>
                </Grid>
                <Grid item xs={6} sm={3}>
                </Grid>
                <div>
                    <div><Icon className="fab fa-facebook-f"/></div>
                    <div><Icon className="fab fa-twitter"/></div>
                    <div><Icon className="fab fa-instagram"/></div>
                    <div><Icon className="fab fa-linkedin"/></div>  
                </div>
                <Grid item xs={12} sm={6}>
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
                </Grid>
            </div>
        </div>
        );
    };