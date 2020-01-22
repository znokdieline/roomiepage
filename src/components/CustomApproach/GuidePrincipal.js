import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

//components


import AnimatedCard from "components/AnimatedCard/AnimationCard";



import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);
export default function GuidePrincipal(){
    const classes = useStyles();    
    return(
        <div className={classes.main}>
            <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }}>GUIDING PRINCIPLES</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3 style={{ fontWeight: 'bold' }}>These are some of the principles that are most important to us.</h3>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={6}>
                    <h5 style={{ fontWeight: 'bold' }}>1. GOAL-DRIVEN DESIGN</h5>
                    <p/>Our digital economy runs on results. We believe in 
                    goal-driven design, pinpointing the intersection between business goals,
                     user goals, and the products designed to bring them together.
                </Grid>
                <Grid item xs={12} sm={6}>
                <AnimatedCard/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <h5 style={{ fontWeight: 'bold' }}>2. LEAN TEAMS</h5>
                    <p/>Each team has a concise number of multi-disciplinary 
                    team members who wear a lot of hats. This approach cuts down on 
                    overhead and eliminates unnecessary communication channels that cost 
                    time and money.
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
                <Grid item xs={12} sm={6}>
                <h5 style={{ fontWeight: 'bold' }}>3. TECHNOLOGY AGNOSTIC</h5>
                    <p/>Hammers ≠ screwdrivers, and businesses run on a
                    variety of solutions. For that reason, we don’t subscribe
                    to a specific set of technologies. Our engineering team delivers
                    the right products that make sense for your unique ecosystem.
                </Grid>
                <Grid item xs={12} sm={6}>
                <h5 style={{ fontWeight: 'bold' }}>3. CLIENTS AS PARTNERS</h5>
                    <p/>The best products are created when everyone operates as a 
                    single unit with common goals. Our success is measured as a team, 
                    so we intentionally sit on the same side of the table as our clients.
                </Grid>
                <Grid item xs={6} sm={3}>
                </Grid>
                <Grid item xs={6} sm={3}>
                </Grid>
                <Grid item xs={6} sm={3}>
                </Grid>
                <Grid item xs={6} sm={3}>
                </Grid>
            </Grid>
            </div>
        </div>
    );
};