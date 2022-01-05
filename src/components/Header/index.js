import React from 'react'

import { Container, SignButtons } from './styles'
import Button from '../Button'
import { ReactComponent as BrandSvg} from '../../images/logo.svg' 

export default () => {
    return (
        <Container>
            <nav>
                <a href="#">
                    <BrandSvg />
                </a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </nav>
            <SignButtons>
                <a href="#">Login</a>
                <Button signup>Sign Up</Button>
            </SignButtons>
        </Container>
    )
}