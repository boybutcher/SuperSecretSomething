import React, {Component} from 'react';
import ProjectTile from './projectTile.js';
import './projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{name: 'Oddments', imageurl: 'https://f4.bcbits.com/img/a0348996479_5.jpg'}, 
        {name: 'I\'m In Your Mind Fuzz', imageurl: 'http://www.abc.net.au/triplej/jawards/14/img/albums/king-gizzard-and-the-lizard-wizard-im-in-your-mind-fuzz.jpg'}, 
        {name: 'Quarters!', imageurl: 'https://f4.bcbits.com/img/a3796441552_5.jpg'}, 
        {name: 'Nonagon Infinity', imageurl: 'https://f4.bcbits.com/img/a1566708845_5.jpg'}],
    };
  }

  render() {
    return (
      <div className='Projects'>
        {this.state.projects.map(project => 
          <ProjectTile project={project}/>
        )}
      </div>
    )
  }
}

export default Projects;