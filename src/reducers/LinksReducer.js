export default (state = [], action = {}) => {
    switch (action.type){
        case 'ADD':
            console.log(typeof state)
            let newState = [...state]
            newState = [...newState, {original: action.payload.link, short_link: action.payload.short_link}]
            // newState.push({original: action.payload.link, short_link: action.payload.short_link})
            return newState
        break
    }
    return state
}