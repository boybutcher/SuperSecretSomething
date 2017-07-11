import React, {Component} from 'react';
import './navBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    var nextModalStatus = !this.state.isModalOpen;
    this.setState({
      isModalOpen: nextModalStatus,
    })
    console.log('handling modal... isModalOpen: ', this.state.isModalOpen);
  }

  render() {
    return (
      <div className='NavBar'>
        <div>King Gizzard and the Lizard Wizard</div>
        <div className='ModalButton' onClick={this.handleModal}>modalButton</div>
      </div>
    )
  }
}

export default NavBar;