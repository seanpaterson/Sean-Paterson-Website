import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProjectDialog from "./ProjectDialog.js";
import './Projects.css';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 0
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen() {
        this.setState({
            open: 1
        });
    }

    handleClose() {
        this.setState({
            open: 0
        });
    }

    render() {
        return (
            <div className='card-bounds' style={{animation: `textFadeIn ${this.props.index / 2}s`}}>
                <Card className='card' onClick={this.handleClickOpen}>
                <CardMedia
                    alt="Contemplative Reptile"
                    image={this.props.image}
                    className='card'
                    >
                    <CardContent className="title-text">
                        {this.props.project.name}
                    </CardContent>
                </CardMedia>
                </Card>
                <ProjectDialog handleClickOpen= {this.handleClickOpen} handleClose= {this.handleClose} open={this.state.open} project={this.props.project}/>
            </div>
        );
    }
}

export default ProjectCard;