import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card"

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function ServicesSection (props){
    const classes = useStyles();
    return(
        <div style={{color: 'white', backgroundColor:'#232424', height: '600px'}} className={classes.main} >
                <GridContainer >
                    <div className={classes.typo}>
                        <GridItem>
                            <div style={{flexDirection:'column'}} justify="center">
                                <div>
                                    <h3 style={{fontWeight: 'bold', color:'gray'}}>SERVICES</h3>
                                </div>
                                <Card>
                                <div style={{ color:'white', backgroundColor:'#232424'}}>
                                    <h4>Strategy</h4>
                                    <div>
                                        <h5>Research & Data</h5>
                                        <h5>Branding & Positioning</h5>
                                        <h5>Business Consulting</h5>
                                        <h5>Go To Market</h5>
                                        <h5>Innovation</h5>
                                    </div>
                                </div>
                                </Card>
                                <Card color="transparent">
                                <div style={{ color:'white', backgroundColor:'#232424'}}>
                                    <h4 >Design</h4>
                                    <div>
                                        <h5>User Research & Testing</h5>
                                        <h5>UX Design</h5>
                                        <h5>Visual Design</h5>
                                        <h5>Editorial Design</h5>
                                        <h5>Innovation</h5>
                                    </div>
                                </div>
                                </Card>
                                {/* <Card color="transparent">
                                <div style={{ color:'white', backgroundColor:'#232424'}}>
                                    <h4 >Content</h4>
                                    <div>
                                        <h5>Copywriting</h5>
                                        <h5>Social Media</h5>
                                        <h5>Interactive Media</h5>
                                        <h5>Motion Design</h5>
                                        <h5>Illustration</h5>
                                        <h5>Photography & Video</h5>
                                    </div>
                                </div>
                                </Card>
                                <Card color="transparent">
                                <div style={{ color:'white', backgroundColor:'#232424'}}>
                                    <h4 >Technology</h4>
                                    <div>
                                        <h5>Application Development</h5>
                                        <h5>Web Development</h5>
                                        <h5>Enterprise CMS</h5>
                                        <h5>Emerging Tech</h5>
                                        <h5>eCommerce</h5>
                                        <h5>CRM</h5>
                                    </div>
                                </div>
                                </Card> */}
                            </div>
                        </GridItem>
                    </div>
                </GridContainer>
        </div>
    );
};