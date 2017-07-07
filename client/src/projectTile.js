import React, {Component} from 'react';
import './projectTile.css';

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.tileHover = this.tileHover.bind(this);
  }

  tileHover() {
    console.log('you\'re hovering over ', this.props.name);
  }

  render() {
    return (
      <div className='ProjectTile' onMouseOver={this.tileHover}>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default ProjectTile;