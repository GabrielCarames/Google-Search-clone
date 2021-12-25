let search = {
    search: null
}

const searchReducer = (state = search, {type, payload}) => {
    switch (type) {
        case '@updateSearch':
            let searchCopy = Object.assign({}, search)
            searchCopy.search = payload.search
            return searchCopy
        default:
            return state
    }
}

export default searchReducer