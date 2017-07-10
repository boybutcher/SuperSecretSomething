import React, {Component} from 'react';
import './videoBanner.css';

class VideoBanner extends Component {
  constructor(props) {
    super(props);
    this.scrollToNav = this.scrollToNav.bind(this);
  }

  scrollToNav() {
    document.getElementsByClassName('NavBar')[0].scrollIntoView();
  }

  render() {
    return (
      <div className='VideoBanner'>
        <h1 onClick={this.scrollToNav}>King Gizzard and the Lizard Wizard</h1>
      </div>
    );
  }
}

export default VideoBanner;