import React, {Component} from 'react';
import MainPage from './MainPage';
import Account from './Account'
import { Route } from 'react-router-dom'

import { getToken } from '../actions/account'
import { getProducts } from '../actions/products'
import { getMaterials } from '../actions/materials'

export default class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getToken())
    this.props.dispatch(getProducts())
    this.props.dispatch(getMaterials())
  }

  render() {
    return (
      <div>
        <header>
          <Account />
        </header>
        <main>
          <Route exact path="/" component={MainPage} />
        </main>
      </div>
    )
  }
}
