import config from '../config'

export const PRODUCTS = 'PRODUCTS'
export const PRODUCT = 'PRODUCT'

export function getProducts(){
    return (dispatch, getState) => {
        const { account } = getState()
        if (!account || !account.token){
            return;
        }
        fetch(config.apiUrl+ '/products', {
            headers: {
                'X-Auth-Token': account.token
            }
        }).then((response)=>{
            if (response.ok){
                return response.json()
            } else {
                return Promise.reject()
            }
        }).then(products => {
            dispatch({ type: PRODUCTS, products })
        })
        .catch(console.error)
    }
}

export function setProductName(productId, name){
    return (dispatch, getState) => {
        const { account } = getState()
        if (!account || !account.token){
            return;
        }
        let data = new FormData()
        data.append('name', name)
        fetch(config.apiUrl+ '/product/'+productId, {
            method: 'PUT',
            headers: {
                'X-Auth-Token': account.token
            },
            body: data
        }).then((response)=>{
            if (response.ok){
                return response.json()
            } else {
                return Promise.reject()
            }
        }).then(product => {
            dispatch({ type: PRODUCT, product: product })
        })
        .catch(console.error)
    }
}

export function postProduct(file){
    return (dispatch, getState) => {
        const { account } = getState()
        if (!account || !account.token){
            return;
        }
        dispatch({ type: PRODUCT, product: {
            productId: 'loading',
            name: file.name,
            status: 'LOADING',
            loadingProgress: 0
        }})
        let data = new FormData()
        data.append('model', file)
        data.append('name', file.name)
        data.append('materialId', 1)
        fetch(config.apiUrl+ '/product', {
            method: 'POST',
            headers: {
                'X-Auth-Token': account.token
            },
            body: data
        }).then((response)=>{
            if (response.ok){
                return response.json()
            } else {
                return Promise.reject()
            }
        }).then(product => {
            dispatch({ type: PRODUCT, product: product })
        })
        .catch(console.error)
    }
}