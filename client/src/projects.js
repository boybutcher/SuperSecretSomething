import React, {Component} from 'react';
import ProjectTile from './projectTile.js';
import './projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{name: 'group 1'}, {name: 'group 2'}, {name: 'group 3'}, {name: 'group 4'}],
    };
  }

  render() {
    return (
      <div className='Projects'>
        {this.state.projects.map(project => 
          <ProjectTile name={project.name}/>
        )}
      </div>
    )
  }
}

export default Projects;