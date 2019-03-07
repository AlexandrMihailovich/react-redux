import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import GoodsContainer from './containers/Goods';
import CardContainer from './containers/Cart';
import store from './store/store'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <main className={'container'}>
              <Switch>
                <Route exact path='/'
                       component={GoodsContainer}/>
                <Route path='/'
                       component={CardContainer}/>
              </Switch>
            </main>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
