import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard.js';
import data from  '../Assets/Projects.json'
import image1 from '../Images/Veterns Affairs Office Website Texture.jpg';
import image2 from '../Images/ByteBook Texture.jpg';
import image3 from '../Images/Home Depot Texture.jpg';
import image4 from '../Images/Homeless API Texture.jpg';
import image5 from '../Images/Connect Four Texture.jpg';
import image6 from '../Images/jammming Texture.jpg';
import image7 from '../Images/Internet Relay Chat Texture.jpg';
import image8 from '../Images/Vehicle Diagnostic Tool Texture.jpg';
import image9 from '../Images/Vehicle Emulator Texture.jpg';
import image10 from '../Images/XV6 Texture.jpg';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var projectImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
        var projects = data;
        return (
            <div  className="project-body">
                <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{paddingTop: "40px", overflow: 'auto', paddingLeft: "4vw", paddingRight: "4vw"}}>
                    {projects.map((project, key) => <ProjectCard project={project} image={projectImages[key]} index= {key}/>)}
                </Grid>
            </div>
        );
    }
}

export default Projects;