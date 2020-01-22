import React from 'react';

import Grid from '@material-ui/core/Grid';

import ImageWorkPrime from "assets/img/field.png";
import Power from "assets/img/powerpuff.png"

import { makeStyles } from '@material-ui/core/styles';

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function WorkModuleCard(props){
    const classes = useStyles();
    return(
        <div className={classes.main}>
            <div className={classes.container}>
            <Grid container spacing={3} >
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid><Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h2 style={{ fontWeight: 'bold' }}>Field Museum</h2>
                        <h4>Helping the world’s fourth largest natural history museum find its next evolution.</h4>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <img src={ImageWorkPrime} alt='comp' width="80%" className={classes.left}/>
                    </Grid>
            </Grid>
            <Grid container spacing={3}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid><Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <img src={Power} alt='comp' width="80%" className={classes.left}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h2 style={{ fontWeight: 'bold' }}>Powerpuff Girls</h2>
                        <h4>Giving the world a chance to discover their "Powfactor".</h4>
                    </Grid>
            <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid><Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
            </Grid>
            </div>
         </div>
    );
};