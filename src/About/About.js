import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';
import AboutSkillProgress from './AboutSkillProgress.js';
import skills from  '../Assets/Skills.json'
import image from '../Images/About Image 1.jpg';
import '../Assets/Colors.css';
import './About.css';

function About(props) {
    return ( 
    <div  className='about-body'>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Parallax
            blur={2}
            bgImage={image}
            bgImageAlt="About Image 1"
            strength={200}
            style={{ height: '30vw', width: '100%' }}>
            <Grid className="about-name-text">Sean Paterson</Grid>
        </Parallax>
        <p className= "paragraph-styles">
            About
        </p>
        <div>
            <p className= "paragraph-styles">
                I am a Full-Stack Software Developer in the Portland, Oregon area. I am a software developer 
                with a green thumb, trying to build fast, scalable, and intuitive web apps for the communities 
                who surround me. Software development has an incredibly wide reach of the likes of which we’ve 
                never seen before! I believe it’s vital to use this tool to better the lives of people over 
                constructing intrusive AIs and monopolized web storefronts.
            </p>
            <p className= "paragraph-styles">
                If I count my four year degree and two years of industry experience, I have technically been a 
                software developer for six years. In that amount of time, I have gained a solid grasp of many 
                technologies as I constantly try to expand on that list for myself.
            </p>
            <p className= "paragraph-styles">
                I have always loved working as a team especially in an agile environment. I have worked in numerous 
                scrum teams during my time in school, internships, and industry. During my time in these agile teams, 
                I have taken part in daily stand-ups, functioned within the time-frame of two week sprints, and 
                organized story-board tasks.
            </p>
            <p className= "paragraph-styles">
                I try to prepare myself for anything in the field which is why I continuously try to familiarize myself with 
                the latest in front-end and back-end technologies. If I don’t already know a tech stack you work in, I will 
                make it my priority to learn it as soon as possible!
            </p>
        </div>
        <p className= "paragraph-styles">
            Skills
        </p>
            {skills.map ((skill, key) => <AboutSkillProgress skill={skill}/>)}
        </Grid>
    </div>
    );
}

export default About;