import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Resources (props){
    const classes = useStyles();
    return(
        <div style={{color: 'white', backgroundColor:'#232424'}} className={classes.main}>
            <div className={classes.container}>
                <Grid container spacing={3} className={classes.typo}>
                    
                </Grid>
                </div>
         </div>
        );
    };

