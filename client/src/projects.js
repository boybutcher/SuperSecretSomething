import React, {Component} from 'react';
import ProjectTile from './projectTile.js';
import './projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ['hello','hello','hello','hello','hello','hello']
    };
  }

  render() {
    return (
      <div>
        {this.state.projects.map(project => 
          <ProjectTile />
        )}
      </div>
    )
  }
}

export default Projects;