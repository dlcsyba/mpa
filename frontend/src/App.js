import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as i18n from 'react-intl-universal';
import logo from './logo.svg';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import './App.css';
import Grid from "./components/grid";
import MaterialDesign from './components/icons/material';
import Ion from './components/icons/ion';
import FontAwesome from './components/icons/fontawesome';
import Typography from './elements/typography';
import BookPurchaseList from './pages/bookpurchaselist';

const locales = {
  "en-US": require('./locales/en.json'),
  "zh-CN": require('./locales/zh.json'),
};

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/components/grid' component={Grid} />
      <Route path='/icons/material-icon' component={MaterialDesign} />
      <Route path='/icons/ion-icons' component={Ion} />
      <Route path='/icons/font-awesome' component={FontAwesome} />
      <Route path='/elements/typography' component={Typography} />
      <Route path='/book-purchase-list' component={BookPurchaseList} />
      {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
  </main>
);

class App extends Component {
    state = {initDone: false};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadLocales();
    }

    loadLocales() {
        i18n.init({
            currentLocale: 'en-US',
            locales,
        })
        .then(() => {
            this.setState({initDone: true});
        });
    }

    render() {
        return (
            this.state.initDone &&
            <div className="App">
                <NavBar />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
