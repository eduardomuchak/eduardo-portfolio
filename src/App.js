import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import ThankYou from './pages/ThankYou';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contato" component={ Contact } />
        <Route exact path="/projetos" component={ Projects } />
        <Route exact path="/thankyou" component={ ThankYou } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;