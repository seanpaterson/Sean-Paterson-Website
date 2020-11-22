import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import '../Assets/Colors.css';
import './About.css';

class AboutSkillProgress extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            level: 0
        }
    }

    componentDidMount(){
        setTimeout(function () {
            this.setState({
                level: this.props.skill.level
            });
        }.bind(this), 1000);
    }

    render() {
        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Grid item xs={2} className="about-skill-text">{this.props.skill.name}</Grid>
                <Grid item xs={8}>
                <div className="about-skill-progress-bounds">
                        <LinearProgress className= "about-skill-progress" variant="determinate" value={this.state.level} />
                </div>
                </Grid>
                <Grid item xs={2} className="about-skill-text">
                    {this.state.level}%
                </Grid>
            </Grid>
        );
    }
}

export default AboutSkillProgress;