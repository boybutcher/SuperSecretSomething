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
    if (this.state.hovering === false) {
      return (
        <div className='ProjectTile' onMouseEnter={this.tileHover}>
          <h1>{this.props.name}</h1>
        </div>
      ) 
    } else {
      return (
        <div className='HoveredTile' onMouseLeave={this.stopHover}>
          <h1>{this.props.name}</h1>
        </div>
      )
    }
  }
}

export default ProjectTile;