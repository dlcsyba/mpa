import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Home/>
                <Footer />
            </div>
        );
    }
}

export default App;
