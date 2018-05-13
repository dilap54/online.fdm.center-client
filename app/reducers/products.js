import { PRODUCTS, PRODUCT } from '../actions/products'

const initialState = {
    items: {}
}

function reduceProducts(oldProducts, products){
    let newProducts = {...oldProducts}
    products.forEach((product) => {
        newProducts[product.productId] = {...newProducts[product.productId], ...product}
    })
    return newProducts
}

function productsReducer(state = initialState, action){
    switch (action.type){
        case PRODUCT:
            return {...state, items: reduceProducts(state.items, [action.product])}
        case PRODUCTS:
            return {...state, items: reduceProducts(state.items, action.products)}
        default: 
            return state
    }
}

export default productsReducer