import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-material-ui-carousel'
import { Parallax } from 'react-parallax';
import AboutSkillProgress from './AboutSkillProgress';
import skills from  '../Assets/Skills.json';
import image from '../Images/About Image 1.jpg';
import '../Assets/Colors.css';
import './About.css';

interface Props {
    windowWidth: number,
    windowHeight: number,
    handleResize: Function
}

function About(props:Props) {
    const items = [];
    for(let i = 1; i <= 3; ++i)
    {
        items.push(
            <Item index={i}/>
        );
    }
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
                <div style={{float: 'right', width: "360px", marginLeft: 'auto', marginRight: 'auto', paddingLeft: '2vw', paddingRight: '2vw'}}>
                <Carousel>
                    {items}
                </Carousel>
                </div>
                Full-Stack Software Developer in the Portland, Oregon area building fast, scalable, 
                and intuitive web apps for the communities that surround me. Software development has an 
                incredibly wide reach the likes of which we’ve never seen before! I believe it’s vital 
                to use this tool to better the lives of people over constructing intrusive AIs and 
                monopolized web storefronts.If I don’t already know a tech stack you work in, I will 
                make it my priority to learn it as soon as possible!
            </p>
            <p className= "paragraph-styles">
                I love working in a team especially in an agile environment. I have worked in numerous 
                scrum teams during my time in school, internships, and industry. During my time in these agile teams, 
                I take part in daily stand-ups, functioned within the time-frame of two week sprints, and 
                organized story-board tasks.
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

type itemProps = {
    index:number
};

function Item(props:itemProps)
{
    const slideName = "carousel-slide-";
    return (
        <Paper className="carousel-paper">
            <div className={slideName + props.index} />
        </Paper>
    )
}

export default About;