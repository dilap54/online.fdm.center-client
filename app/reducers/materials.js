import { MATERIALS } from '../actions/materials'

const initialState = {
    materials: []
}

function materialsReducer(state = initialState, action){
    switch (action.type){
        case MATERIALS:
            return {...state, materials: action.materials}
        default: return state
    }
}

export default materialsReducer