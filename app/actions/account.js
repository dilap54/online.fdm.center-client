import config from '../config'

export const AUTH_TOKEN = 'AUTH_TOKEN'
export const MATERIALS = 'MATERIALS'

export function getMaterials(){
    return (dispatch, getState) => {
        const { account } = getState()
        if (!account || !account.token){
            return;
        }
        fetch(config.apiUrl+ '/materials', {
            headers: {
                'X-Auth-Token': account.token
            }
        }).then((response)=>{
            if (response.ok){
                return response.json()
            } else {
                return Promise.reject()
            }
        }).then(materials => {
            dispatch({ type: MATERIALS, materials })
        })
        .catch(console.error)
    }
}

export function getToken(){
    return (dispatch) => {
        fetch(config.apiUrl + '/getTemporaryToken', {
            method: 'POST'
        }).then((response) => {
            if (response.ok){
                return response.json()
            } else {
                return Promise.reject()
            }
        }).then(token => {
            dispatch({ type: AUTH_TOKEN, token })
            dispatch(getMaterials())
        })
        .catch(console.error)
    }
}