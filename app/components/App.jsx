import React from 'react';
import MainPage from './MainPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { getToken } from '../actions/account'

export default class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getToken())
  }

  render() {
    const widget = (
      <Router>
        <Route exact path="/" component={MainPage} />
      </Router>
    );
    return widget;
  }
}
