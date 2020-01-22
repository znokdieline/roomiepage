import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion,useViewportScroll, useTransform } from "framer-motion"


import ImageWe from "assets/img/roomie.jpg"


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function HowWeAre (props){
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform( scrollYProgress, [ 0,1 ], [ 0.5,2 ] ); 
    return(
        <div style={{color: 'dark'}} className={classes.main}>
            <div className={classes.container}>
                <Grid container spacing={3} className={classes.typo}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }}> WHO WE ARE </h4>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h5>We’re an independently owned, strategic creative agency – forever curious and ready to transform the way business is done.</h5>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <motion.div style={{ scale }}>
                        <motion.div style={{ scale: scrollYProgress }} >
                        </motion.div>
                            <img src={ImageWe} alt='comp' width="100%" className={classes.left}/>
                    </motion.div>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <h4 style={{ fontWeight: 'bold' }}>Design</h4>
                        <h5>OUR PEOPLE COME FIRST</h5>
                        <h5>Although we are a well-oiled machine, our people are far from cogs. The talent we cultivate gets the importance of honing their respective crafts. It helps to better serve both each other and our partners, and it shows in everything – from what we design and produce, to what we value and believe.</h5>
                    </Grid>
                    <Grid item xs={3} sm={2}>
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

