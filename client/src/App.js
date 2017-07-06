import React, { Component } from 'react';
import VideoBanner from './videoBanner.js';
import NavBar from './navBar.js';
import ProjectTile from './projectTile.js';
import Footer from './footer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ['hello','hello','hello','hello','hello','hello']
    };
  }

  render() {
    return (
      <div>
        <VideoBanner />
        <NavBar />
        {this.state.projects.map(project => 
          <ProjectTile />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
