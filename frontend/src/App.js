import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import './App.css';
import Grid from "./components/grid";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/components/grid' component={Grid} />
      {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
  </main>
);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
