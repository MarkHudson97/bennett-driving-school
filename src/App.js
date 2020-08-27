import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/HomeScreen';
import About from './screens/AboutUsScreen';
import Contact from './screens/ContactScreen';
import Prices from './screens/PricesScreen';
import EDT from './screens/EDTInformation';
import Info from './screens/ExtraInformation';
import Error from './screens/ErrorScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/prices" component={Prices} />
            <Route path="/edt" component={EDT} />
            <Route path="/info" component={Info} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;