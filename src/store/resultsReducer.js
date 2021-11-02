const results = null
const previousResults = JSON.parse(localStorage.getItem('results'))

const resultsReducer = (state = results, {type, payload}) => {
    switch (type) {
        case '@updateResults':
            localStorage.setItem('results', JSON.stringify({...state, payload}))
            return {...state, payload}
        default:
            if(previousResults) return previousResults
            else return state
    }
}

export default resultsReducer