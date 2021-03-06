const initial_state = {
    name: '',
    address: '',
    city: '',
    st: '',
    zipcode: ''
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';

export function update_name(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function update_address(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function update_city(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function UPDATE_STATE(st) {
    return {
        type: UPDATE_STATE,
        payload: st
    }
}

export function UPDATE_ZIPCODE(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}

export default reducer(state=initial.state, action){
    switch(action.type){
        case UPDATE_NAME:
        return Object.assign({},state, {name: action.payload});
        case UPDATE_ADDRESS:
        return Object.assign({},state, {address: action.payload});
        case UPDATE_CITY:
        return Object.assign({},state, {city: action.payload});
        case UPDATE_STATE:
        return Object.assign({},state, {st: action.payload});
        case UPDATE_ZIPCODE:
        return Object.assign({},state, {zipcode: action.payload});
        default:
        return state;
    }
}