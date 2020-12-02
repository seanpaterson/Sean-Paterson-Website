import React from "react";
import { Parallax } from 'react-parallax';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import image from '../Images/Contact Image 1.jpg';
import './Contact.css';


function Contact() {
    return (
    <div style={{ height: window.innerHeight, width: '100%' }}>
        <Parallax
            blur={4}
            bgImage={image}
            bgImageAlt="Contact Image 1"
            strength={100}
            style={{ height: window.innerHeight, width: '100%', animation: `textFadeIn 1s` }}>
                <div className= "center-space">
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                    >
                        <Grid className="catch-phrase-text">Let's develop the future we deserve!</Grid>
                        <Grid className="name-text">Sean Douglas Paterson</Grid>
                        <Grid container direction="row" justify="center" alignItems="center" className="email-text">
                            <EmailIcon style={{height: '50px', width: '50px', paddingRight: '1vw'}} />
                            <div>seanpaterson117@gmail.com</div>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" className="phone-text">
                            <PhoneInTalkIcon style={{height: '50px', width: '50px', paddingRight: '1vw'}}/>
                            <div>541-260-4464</div>
                        </Grid>

                        <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                            <div style={{paddingTop: "20px", paddingRight: "calc(5px + 5vw)"}}>
                                <IconButton 
                                className="button-style" 
                                onClick={()=> window.open("https://www.linkedin.com/in/sean-paterson-b31835124/")}>
                                    <LinkedInIcon style={{color:"white", height: '50px', width: '50px'}}/>
                            </IconButton>
                            </div>
                            <div style={{paddingTop: "20px", paddingLeft: "calc(5px + 5vw)"}}>
                                <IconButton className="button-style"
                                onClick={()=> window.open("https://github.com/seanpaterson")}>
                                    <GitHubIcon style={{color:"white", height: '50px', width: '50px'}}/>
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </div>
        </Parallax>
    </div>
    );
}



export default Contact;