import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from 'components/CustomButtons/Button'


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function ServicesSection (props){
    const classes = useStyles();
    return(
        <div style={{color: 'white', backgroundColor:'#232424'}} className={classes.main}>
            <div className={classes.container}>
                <Grid container spacing={3} className={classes.typo}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }}> OUR SERVICES </h4>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h5>Our offerings / capabilities. We also offer custom solutions for our clients by deploying embedded resources.</h5>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                    <h4 style={{ fontWeight: 'bold' }}>Strategy</h4>
                        <h5>Research & Data</h5>
                        <h5>Branding & Positioning</h5>
                        <h5>Business Consulting</h5>
                        <h5>Go To Market</h5>
                        <h5>Innovation</h5>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                    <h4 style={{ fontWeight: 'bold' }}>Design</h4>
                        <h5>User Research & Testing</h5>
                        <h5>UX Design</h5>
                        <h5>Visual Design</h5>
                        <h5>Information Architecture</h5>
                        <h5>Editorial Design</h5>
                        <h5>Environmental Design</h5>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                    <h4 style={{ fontWeight: 'bold' }}>Content</h4>
                        <h5>Copywriting</h5>
                        <h5>Social Media</h5>
                        <h5>Interactive Media</h5>
                        <h5>Motion Design</h5>
                        <h5>Illustration</h5>
                        <h5>Photography & Video</h5>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                    <h4 style={{ fontWeight: 'bold' }}>Technology</h4>
                        <h5>Application Development</h5>
                        <h5>Web Development</h5>
                        <h5>Enterprise CMS</h5>
                        <h5>Emerging Tech</h5>
                        <h5>eCommerce</h5>
                        <h5>CRM</h5>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                    </Grid>
                </Grid>
                </div>
                <div className={classes.root} style={{color: 'white', backgroundColor:'#1f2020'}}>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <h5 style={{ fontWeight: 'bold' }}>Ready to learn more?</h5>
                    <Button
                    color="red"
                    size="lg"
                    href="/"
                    target="_blank"
                    >
                    Read about our approach and services
                    </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                </Grid>
                </div>
         </div>
        );
    };

