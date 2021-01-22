import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import './Footer.css';

function Footer(): React.ReactElement {
    return (
        <BottomNavigation className="footer-assets">
            <Grid container>
                <Grid item container xs={6}>
                    <div className="footer-text-style">
                        Sean Paterson Copyright (C) 2020
                    </div>
                </Grid>
                <Grid item container xs={6} style={{justifyContent:"flex-end"}}>
                    <div>
                        <IconButton 
                        onClick={()=> window.open("https://www.linkedin.com/in/sean-paterson-b31835124/")}>
                            <LinkedInIcon className="third-party-button-style"/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                        onClick={()=> window.open("https://github.com/seanpaterson")}>
                            <GitHubIcon className="third-party-button-style"/>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </BottomNavigation>
    );
}

export default Footer