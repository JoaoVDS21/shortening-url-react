import React from 'react'
import { Button } from './styles'

export default (props) => {
    return (
        <Button changeTo={props}>{props.children}</Button>
    )
}