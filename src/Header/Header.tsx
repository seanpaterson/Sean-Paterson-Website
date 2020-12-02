import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import image from '../Images/Header Image 1.jpg';
import './Header.css';

class Header extends React.Component <{ windowWidth:number, handleResize:any }, { open: boolean }> {
    
    constructor(props:any) {
        super(props);
        this.state = { 
            open: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
       
    handleClick() {
        let newPos;
        if(this.state.open == true)
            newPos = false;
        else
            newPos = true;

            this.setState({
                open: newPos
            });
    }

    render() {
        return (
            <div style={{paddingBottom:"2.5vw"}}>
            <AppBar className="header-assets">
            {this.props.windowWidth > 500 ?
                <Grid container className="grid-text">
                    <Grid item xs={3}>
                        <Avatar style={{transform: `scale(1.7)`, top: "15px"}} alt="Sean" src={image}/>
                    </Grid>
                    <Grid item xs={3} className="grid-item">
                        <Link className="button" to="/about">
                            <Button className="button">
                                <text className="button-text">
                                    ABOUT
                                </text>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={3} className="grid-item">
                        <Link className="button" to="/projects">
                            <Button className="button">
                                <text className="button-text">
                                    PROJECTS
                                </text>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={3} className="grid-item">
                        <Link className="button" to="/contact">
                            <Button className="button">
                                <text className="button-text">
                                    CONTACT
                                </text>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            :
            <div>
                <Button onClick = {this.handleClick} className="button"><MenuIcon /></Button>
                <Collapse in={this.state.open}>
                    <Paper elevation={4} className="collapse-paper">
                    <Link className="button" to="/about">
                        <Button onClick = {this.handleClick} className="button">
                            <text className="button-text">
                                ABOUT
                            </text>
                        </Button>
                    </Link>
                    <Link className="button" to="/projects">
                        <Button onClick = {this.handleClick} className="button">
                            <text className="button-text">
                                PROJECTS
                            </text>
                        </Button>
                    </Link>
                    <Link onClick = {this.handleClick} className="button" to="/contact">
                        <Button className="button">
                            <text className="button-text">
                                CONTACT
                            </text>
                        </Button>
                    </Link>
                    </Paper>
                </Collapse>
            </div>
            }
            </AppBar>
            </div>
        );
    }
}

export default Header;