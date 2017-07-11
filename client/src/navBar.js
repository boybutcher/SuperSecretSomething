import React, {Component} from 'react';
import './navBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
  }

  render() {
    return (
      <div className='NavBar'>
        <div>NavBar</div>
        <div className='ModalButton'>modalButton</div>
      </div>
    )
  }
}

export default NavBar;