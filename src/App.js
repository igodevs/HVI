import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './containters/Home';
import About from './containters/About';
import Application from './containters/Application';
import Downloads from './containters/Downloads';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/downloads' component={Downloads} />
        <Route path='/application' component={Application} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
