let location = {
    country: null,
    region: null
}

const searchReducer = (state = location, {type, payload}) => {
    let searchCopy = Object.assign({}, state)
    switch (type) {
        case '@updateCountry':
            searchCopy.country = payload
            return searchCopy
        case '@updateRegion':
            searchCopy.region = payload
            return searchCopy
        default:
            return state
    }
}

export default searchReducer