import React, {Component} from 'react';
import './projectTile.css';

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    }
    this.tileHover = this.tileHover.bind(this);
    this.stopHover = this.stopHover.bind(this);
  }

  tileHover() {
    this.setState({
      hovering: true
    })
  }

  stopHover() {
    this.setState({
      hovering: false
    })
  }

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