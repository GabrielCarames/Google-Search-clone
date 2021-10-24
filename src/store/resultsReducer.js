const results = null

const resultsReducer = (state = results, {type, payload}) => {
    switch (type) {
        case '@updateResults':
            return {...state, payload}
            // return {...payload }
        default:
            return state
    }
}

export default resultsReducer