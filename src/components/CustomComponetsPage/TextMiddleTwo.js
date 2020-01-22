import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion,useViewportScroll, useTransform } from "framer-motion"

import ImageOne from "assets/img/laptop.png"
import ImageTwo from "assets/img/cs-ios.png"

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function TextMiddleTwo (props){
    const classes = useStyles();
    //motion
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform( scrollYProgress, [ 0,1 ], [ 0.5,2 ] );
    return(
        
        <div style={{color: 'white', backgroundColor:'#4f35d9', alignContent: "center", height:"600px"}} className={classes.main}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={4} style={{ alignItems: 'stretch' }}>
                <motion.div
                style={{
                  scale
                }}
                >
                <motion.div
                style={{
                  scale: scrollYProgress
                }}
                ></motion.div>
                  <img src={ImageOne} alt='comp' width="400px" className={classes.left}/>
                </motion.div>
            </Grid>
            <Grid item xs={4}>
              <h1 className={classes.title}>Field Museum</h1>
                <h3>Helping the world’s fourth largest natural <p/>history museum find its next evolution.</h3>
            </Grid>
            <Grid item xs={4} style={{ alignItems: 'stretch' }}>
            <motion.div
                style={{
                  scale
                }}
                >
                <motion.div
                style={{
                  scale: scrollYProgress
                }}
                ></motion.div>
                  <img src={ImageTwo} alt='comp' width="200px" className={classes.left}/>
                </motion.div>
            </Grid>
          </Grid>
        </div>
        );
    };
