import { PRODUCT } from '../actions/products'

const initialState = {
    //productId: null
    productId: 8
}

function mainPageReducer(state = initialState, action){
    switch (action.type){
        case PRODUCT:
            return { ...state, productId: action.product.productId }
        default: 
            return state
    }
}

export default mainPageReducer