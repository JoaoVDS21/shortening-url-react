import React, { useState } from "react";

import { Container, ShorteningContainer, InputUrl } from './styles'
import { ReactComponent as BackgroundSvg } from '../../images/bg-shorten-desktop.svg'

import Button from '../Button'

export default () => {
    const [textUrl, setTextUrl] = useState('')
    
    return (
        <Container>
            <ShorteningContainer>
                <BackgroundSvg/>
                <InputUrl value={textUrl} onChange={e=>setTextUrl(e.target.value)} placeholder="Shorten a link here..."/>
                <Button shorten>Shorten it!</Button>
            </ShorteningContainer>
            {/* <ShortenLinks>
                Aqui vai os links já encurtados pelo usuário
            </ShortenLinks> */}
            
        </Container>
    )
}