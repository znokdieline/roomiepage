import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Player } from 'video-react';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function ImageVideoPart(props){
    const classes = useStyles();
    return(
                <GridContainer>
                    <GridItem xs={12} md={8} className={classes.marginAuto} >
                        <Card>
                            <Player
                                playsInline
                                poster="/src/assets/img/home.jpg"
                                src="https://s3.amazonaws.com/cdn.prpl.rs/media/sizzle_supercut.mp4"
                            />
                        </Card>
                    </GridItem>
                </GridContainer>
    );
};