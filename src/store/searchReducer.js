const search = null

const searchReducer = (state = search, {type, payload}) => {
    switch (type) {
        case '@updateSearch':
            return {...state, payload}
        default:
            return state
    }
}

export default searchReducer