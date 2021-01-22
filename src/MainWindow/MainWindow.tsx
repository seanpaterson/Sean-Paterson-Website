import React from "react";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

  class MainWindow extends React.Component<{}, { windowWidth: number, windowHeight: number }> {
    constructor(props:object) {
        super(props);
        this.state = { 
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        };
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize = (e) => {
        this.setState({ 
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
       };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
       }
      
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
       }

    render () {
        return (
            <div>
                <Router>
                    <Header windowWidth={this.state.windowWidth} handleResize={this.handleResize}/>
                    <div>
                        <Switch>
                        <Route exact path="/">
                            <Redirect to="/about" />
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/about">
                            <About windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight} handleResize={this.handleResize}/>
                        </Route>
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default MainWindow;