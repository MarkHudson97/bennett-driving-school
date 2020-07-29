import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/HomeScreen';
import About from './screens/AboutUsScreen';
import Contact from './screens/ContactScreen';
import Prices from './screens/PricesScreen';
import Info from './screens/UsefulInfoScreen';
import Error from './screens/ErrorScreen';
// import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/prices" component={Prices} />
            <Route path="/info" component={Info} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;