import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container } from 'bloomer';
import HomePage from './component/HomePage';
import NamePage from './component/NamePage';
import BookPage from './component/BookPage';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <div>
            <Link to="/">Home</Link> | <Link to="/name">Name</Link>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/name" component={NamePage} />
              <Route path="/name/:list_name_encoded" component={BookPage} />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
