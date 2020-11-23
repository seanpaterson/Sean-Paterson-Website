import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import { ListItem } from '@material-ui/core';

function ProjectDialog (props) {
    let stackLength = props.project.techStack.length;
    return (
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        >
        <div className="dialog">
        <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start">
            <DialogTitle className="title-text">{props.project.name}</DialogTitle>
            {props.project.github != undefined ?
                <IconButton style={{color: "white"}}
                onClick={()=> window.open(props.project.github)}>
                    <GitHubIcon style={{height: "40px", width: "40px", paddingTop: "0.5vw", paddingRight: "1vw", color: "white"}}/>
                </IconButton> :
                <div />
            }
        </Grid>
            <DialogContent className="dialog-text">
                Tech Stack: {props.project.techStack.map((techItem, i) => {
                    let toReturn = techItem;
                    if(stackLength != i + 1)
                    {
                        toReturn += ", ";
                    }
                    return toReturn;
                })}
            </DialogContent>
            <DialogContent className="dialog-text">
                Description:
                <div style={{paddingTop: 'calc(1vw + 1px)', paddingBottom: 'calc(1vw + 1px)'}}>
                <List style={{maxHeight: 100, overflow: 'auto', backgroundColor: 'white', color: 'black'}}>
                    {props.project.description.map(descItem => 
                    <div>
                        <ListItem>
                        {descItem}
                        </ListItem>
                        <Divider />
                    </div>
                    )}
                </List>
                </div>
            </DialogContent>
        </div>
      </Dialog>
      );
}

export default  ProjectDialog;