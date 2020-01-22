import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

//elements
import "assets/css/scrollerStyle.css";

import ImageStrategy from "assets/img/illo-strategy.png";
import ImageDesign from "assets/img/illo-design.png";
import ImageContent from "assets/img/illo-content.png";


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function OurServicesAp (props){
    const classes = useStyles();
    return(
        <div style={{color: 'white', backgroundColor:'#232424'}} className={classes.main}>
            <div className={classes.container}>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }}>Strategy</h4>
                        <h5>The path toward creating a superior product starts with 
                        robust data analytics and thoughtful research insights. 
                        Our team of strategists and analysts use in-depth user and 
                        market research, intuitive information architecture, and product 
                        roadmaps to help lay the groundwork for success.</h5>
                        <Grid item xs={6} sm={3}>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Copywriting</h6>
                        </Grid>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Social Media</h6>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <img src={ImageStrategy} alt='comp' width="80%" className={classes.left}/>
                    </Grid>
            </Grid>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <img src={ImageDesign} alt='comp' width="80%" className={classes.left}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }}>Design</h4>
                        <h5>A compelling brand communicates the values, voice, and emotions 
                        that you want people to associate with your company. We find every 
                        opportunity to convey the most authentic, memorable representation of 
                        your brand, with a focus on fluid user experiences and beautiful design.</h5>
                        <Grid item xs={6} sm={3}>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Copywriting</h6>
                        </Grid>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Social Media</h6>
                        </Grid>
                        </Grid>
                    </Grid>
            </Grid>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }}>Content</h4>
                        <h5>The path toward creating a superior product starts with 
                        robust data analytics and thoughtful research insights. 
                        Our team of strategists and analysts use in-depth user and 
                        market research, intuitive information architecture, and product 
                        roadmaps to help lay the groundwork for success.</h5>
                        <Grid item xs={6} sm={3}>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Copywriting</h6>
                        </Grid>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Social Media</h6>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <img src={ImageContent} alt='comp' width="80%" className={classes.left}/>
                    </Grid>
            </Grid>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <img src={ImageDesign} alt='comp' width="80%" className={classes.left}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }}>Technology</h4>
                        <h5>A compelling brand communicates the values, voice, and emotions 
                        that you want people to associate with your company. We find every 
                        opportunity to convey the most authentic, memorable representation of 
                        your brand, with a focus on fluid user experiences and beautiful design.</h5>
                        <Grid item xs={6} sm={3}>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Copywriting</h6>
                        </Grid>
                        <Grid xs={3} sm={1}>
                        <h6 style={{ fontWeight: 'bold' }}>Social Media</h6>
                        </Grid>
                        </Grid>
                    </Grid>
            </Grid>
            </div>
         </div>
        );
    };

