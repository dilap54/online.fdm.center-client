import { AUTH_TOKEN } from '../actions/account'

const initialState = {
    token: null
}

function accountReducer(state = initialState, action){
    switch (action.type){
        case AUTH_TOKEN:
            return {...state, token: action.token.token}
        default: return state
    }
}

export default accountReducer