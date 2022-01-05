import React from 'react'

import { Container, Information } from './styles.js'
import Button from '../Button'

import {ReactComponent as IllustrationSvg} from '../../images/illustration-working.svg'

export default () => {
    return (
        <Container>
            <Information>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button>Get Started</Button>
            </Information>
            <IllustrationSvg/>
        </Container>
    )
}