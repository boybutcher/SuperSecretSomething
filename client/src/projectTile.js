import React, {Component} from 'react';
import './projectTile.css';

class ProjectTile extends Component {
  render() {
    return (
      <div className='Tile'>
        <img src={this.props.project.imageurl} alt='thumbnail' className='ThumbnailImage'/>
        <div className='Overlay'> 
          <div className='TileName'>{this.props.project.name}</div>
        </div>
      </div>
    )
  }
}

export default ProjectTile;