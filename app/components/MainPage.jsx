import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dropzone from 'react-dropzone'
import ProductTab from './ProductTab'

import { postProduct } from '../actions/products'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    postProduct: (files) => {
      dispatch(postProduct(files[0]))
    }
  }
}

class MainPage extends Component {
  constructor(props){
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles, rejectedFiles)
    this.props.postProduct(acceptedFiles)
  }

  render() {
    return (
      <div className="container">
        <h5>UPLOAD MODEL</h5>
        <Dropzone onDrop={this.onDrop}/>
        <ProductTab />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
