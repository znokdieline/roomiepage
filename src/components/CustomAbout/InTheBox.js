import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from 'components/CustomButtons/Button';
import { motion,useViewportScroll, useTransform } from "framer-motion";

import styles from "assets/jss/material-kit-react/views/components.js";

import ImageBox from "assets/img/roomie_bot.jpg";
import ImageBox2 from "assets/img/roomie_team.jpg";

const useStyles = makeStyles(styles);

export default function InTheBox (props){
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform( scrollYProgress, [ 0,.5 ], [ .3,1 ] ); 
    return(
        <div className={classes.main} >
            <div className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }} >WHAT'S IN THE BOX!?.</h4>
                    <h5>Doesn"t matter. We"re too busy thinking far 
                    outside of the constraints of the typical brief. 
                    Creativity: it"s what drives us. We do our best work when 
                    the guardrails are down and we can spread our wings. Designs are 
                    cleaner, strategies sharper, and the world generally becomes a better place.</h5>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <motion.div style={{ scale }}>
                        <motion.div style={{ scale: scrollYProgress }} >
                        </motion.div>
                        <img src={ImageBox} alt='comp' width="100%" className={classes.left}/>
                    </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <motion.div style={{ scale }}>
                        <motion.div style={{ scale: scrollYProgress }} >
                        </motion.div>
                            <img src={ImageBox2} alt='comp' width="100%" className={classes.left}/>
                    </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h4 style={{ fontWeight: 'bold' }} >THE CITY BEAUTIFUL, AND BEYOND.</h4>
                    <h5>Although we call Downtown Orlando "home", 
                    we work well with partners from here to Timbuktu. 
                    We also believe that great products can come from anywhere. 
                    So, we encourage our team to untether, stretch their legs, 
                    and explore alternative workspaces.</h5>
                    </Grid>
                    <Grid item xs={12}>
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
                    <h5 style={{ fontWeight: 'bold' }}>Like what you see?</h5>
                    <Button
                    color="red"
                    size="lg"
                    href="/"
                    target="_blank"
                    >
                    Come work with us
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

