import { useRoutes } from 'react-router-dom'

import Main from '../pages/Main'

export default ()=>{
    return useRoutes([
        {path: '/', element: <Main/>}
    ])
}