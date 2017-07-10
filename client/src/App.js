import React, { Component } from 'react';
import VideoBanner from './videoBanner.js'
import NavBar from './navBar.js';
import Projects from './projects.js';
import Footer from './footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <VideoBanner />
        <NavBar />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
