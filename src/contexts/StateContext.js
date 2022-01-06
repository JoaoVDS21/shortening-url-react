import { createContext, useContext, useReducer } from 'react'
import LinksReducer from '../reducers/LinksReducer'

export const StateContext = createContext()

const initialState = {
    links: LinksReducer()
}

const reducer = (state, action) => ({
    links: LinksReducer(state.links, action)
})

export const StateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)