import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import '../Assets/Colors.css';
import './About.css';

const styles = () => ({
    colorPrimary: {
        background: `rgba(51, 101, 138, .00)`,
    },
    barColorPrimary: {
        background: `linear-gradient(0.30turn, var(--mango), var(--burnt))`,
    }
  });

class AboutSkillProgress extends React.Component <{ skill:any, classes:any }, { level: number }> {

    constructor(props:any){
        super(props);
        this.state = {
            level: 0
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                level: this.props.skill.level
            });
        }, 1000);
    }

    render() {
        const { classes } = this.props;
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
                        <LinearProgress classes= {{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} className="about-skill-progress" variant="determinate" value={this.state.level} />
                </div>
                </Grid>
                <Grid item xs={2} className="about-skill-text">
                    {this.state.level}%
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(AboutSkillProgress);