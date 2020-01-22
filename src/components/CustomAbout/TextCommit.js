import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function TextCommit (props){
    const classes = useStyles();
    return(
        <div style={{color: 'white', backgroundColor:'#232424', height:'100%'}} className={classes.main}>
            <div className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h1 style={{ fontWeight:'900' }}>Commit.</h1>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h1 style={{ fontWeight: 'bold' }}>Explore.</h1>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h1 style={{ fontWeight: 'bold' }}>do grate work.</h1>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </div>
         </div>
        );
    };