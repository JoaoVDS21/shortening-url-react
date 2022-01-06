import React from 'react'
import { Button } from './styles'

export default (props) => {
    return (
        <Button changeTo={props} onClick={props.onClick}>{props.children}</Button>
    )
}