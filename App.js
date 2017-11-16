import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
        <Canvas/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World</h1>
          <h4>hello to egypt</h4>
          <h3>Welcome to React</h3>
          <h4>hi</h4>
        </div>

    );
  }
}

class Content extends Component {
  render() {
    return (

            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
              </p>

    );
  }
}

class Footer extends Component {
  render() {
    return (    
          <h3>this the Footer</h3>

    );
  }
}

class Canvas extends Component {
  render() {
    return (
      <div>
<canvas></canvas>
        </div>

    );
  }
}


export default App;

