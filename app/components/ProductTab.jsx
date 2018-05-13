import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setProductName } from '../actions/products'

const mapStateToProps = (state) => {
  return {
    product: state.mainPage.productId ? state.products.items[state.mainPage.productId] : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setProductName: (productId, name) => dispatch(setProductName(productId, name))
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    setProductName: (event) => dispatchProps.setProductName(stateProps.product.productId, event.target.value)
  }
}

class ProductTab extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { product, setProductName } = this.props
    if (!product){
      return null
    }
    return (
      <div style={{
        border: 'solid 1px rgba(0, 0, 0, 0.5)'
      }} className="mt-3 py-3">
        <div className="col-md-6">
          <label>Название</label>
          <input className="form-control" defaultValue={product.name} onBlur={setProductName} />
          <label>Загрузка</label>
          <div className="progress">
            { product.status == 'LOADING'
              ? <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}></div>
              : <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}></div>
            }
            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductTab);
