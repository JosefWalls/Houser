import { createStore} from 'redux'

const initalState = {
    header: "Houser",
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    image: "",
    properties: []
}


export const DISPLAY_HEADER = "DISPLAY_HEADER"
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP"
export const UPDATE_PROPERTIES = "UPDATE_PROPERTIES"
export const UPDATE_IMAGE = "UPDATE_IMAGE"

function reducer(state = initalState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_NAME:
            return {...state, name: payload}
        case DISPLAY_HEADER:
            return {...state, name: payload}
        case UPDATE_ADDRESS:
            return {...state, address: payload}
        case UPDATE_CITY:
            return {...state, city: payload}
        case UPDATE_STATE:
            return {...state, state: payload}
        case UPDATE_ZIP:
            return {...state, zip: payload}
        case UPDATE_IMAGE:
            return {...state, image: payload}
        case UPDATE_PROPERTIES:
            // console.log({...state, properties: payload})
            return {...state, properties: payload}
        default: 
        return {...state}
    }
}

export default createStore(reducer)