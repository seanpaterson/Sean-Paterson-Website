import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import image from '../Images/Contact Image 1.jpg';
import sendEmail from '../http/email';
import './Contact.css';

const styles = theme => ({
    button: {
        color: `white`,
        backgroundColor: `var(--verdigris)`,
        paddingTop: '1vw',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingBottom: '1vw',
        '&:hover': {
            background: `var(--queen-blue)`,
            color: `white`
         },
    }
});

interface ContactState {
    emailAddress:string,
    subject:string,
    description:string,
    errorCode:number,
    statusString:string
}

class Contact extends React.Component <{ classes:any }, ContactState > {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            subject: "",
            description: "",
            errorCode: 0,
            statusString:""
        }
        this.handleSend = this.handleSend.bind(this);
    }
    handleSend() {
        sendEmail(this.state.emailAddress, this.state.subject, this.state.description, (res) => {
            if(res.code == 200)
                window.location.reload(false);
            else {
                this.setState({
                    errorCode: res.code,
                    statusString: res.msg
                });
            }
        });
    }
    render() {
        const { classes } = this.props;
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
                            <Grid className="email-text">Send me a message and I'll respond when I can!</Grid>
                            {this.state.errorCode ? 
                            <Grid className="error-text">{this.state.errorCode}:{this.state.statusString}</Grid>:
                            <div />}
                            <Grid 
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                className="email-container">
                                <div className = "email-textbox-bounds">
                                    <TextField 
                                    id="filled-basic" 
                                    label="Email" 
                                    variant="filled" 
                                    className="email-textbox"
                                    InputLabelProps={{style: {
                                        color: 'var(--egg-shell)',
                                    }}}
                                    InputProps={{
                                        style: {
                                            color: 'var(--egg-shell)',
                                            background: 'var(--queen-blue)'}}}
                                    onChange={e => this.setState({emailAddress: e.target.value})}
                                    />
                                </div>
                                <div className = "email-textbox-bounds">
                                    <TextField 
                                    id="filled-basic" 
                                    label="Subject" 
                                    variant="filled" 
                                    className="email-textbox"
                                    InputLabelProps={{style: {
                                        color: 'var(--egg-shell)'
                                    }}}
                                    InputProps={{style: {
                                        color: 'var(--egg-shell)',
                                        background: 'var(--queen-blue)'
                                        }}}
                                    onChange={e => this.setState({subject: e.target.value})}
                                    />
                                </div>
                                <div className = "email-textbox-bounds">
                                    <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    className="email-textbox"
                                    InputLabelProps={{style: {
                                        color: 'var(--egg-shell)'
                                    }}}
                                    InputProps={{style: {
                                        color: 'var(--egg-shell)',
                                        background: 'var(--queen-blue)'
                                    }}}
                                    onChange={e => this.setState({description: e.target.value})}
                                    />
                                </div>
                                <div className="email-button-bounds">
                                    <Button 
                                    className= {classes.button}
                                    onClick={this.handleSend}>
                                        <div style={{color:'var(--egg-shell)'}}>
                                            SEND
                                        </div>
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
            </Parallax>
        </div>
        );
    }
}

export default withStyles(styles) (Contact);