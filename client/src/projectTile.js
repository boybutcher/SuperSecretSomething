import React, {Component} from 'react';
import './projectTile.css';

class ProjectTile extends Component {
  render() {
    return (
      <div className='ProjectTile'>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default ProjectTile;