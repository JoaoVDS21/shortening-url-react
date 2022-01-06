import React, { useState } from "react";
import { useStateContext } from '../../contexts/StateContext'
import api from '../../api'

import { Container, ShorteningContainer, InputUrl, ShortedLinks, ShortedLink, Default, Shorted } from './styles'
import { ReactComponent as BackgroundSvg } from '../../images/bg-shorten-desktop.svg'

import Button from '../Button'

export default () => {
    const [textUrl, setTextUrl] = useState('')
    const [isCopied, setIsCopied] = useState(false)
    const [state, dispatch] = useStateContext()

    const handleShortenClick = async (url) => {
        if(url){
            let result = await api.getShortedLink(url)
            if(result.ok){
                dispatch({
                    type: 'ADD',
                    payload: {
                        link: result.result.original_link,
                        short_link: result.result.full_short_link
                    }
                })
            } else {
                console.log(result.error)
            }
        }
    }
    
    return (
        <Container>
            <ShorteningContainer>
                <BackgroundSvg/>
                <InputUrl value={textUrl} onChange={e=>setTextUrl(e.target.value)} placeholder="Shorten a link here..."/>
                <Button shorten onClick={()=>handleShortenClick(textUrl)}>Shorten it!</Button>
            </ShorteningContainer>
            <ShortedLinks>
                {state.links.map((item,index)=>(
                    <ShortedLink key={index}>
                        <Default>{item.original}</Default>
                        <Shorted>{item.short_link}</Shorted>
                        <Button shorten isCopied={isCopied}>Copy</Button>
                    </ShortedLink>
                ))}
            </ShortedLinks>
            
        </Container>
    )
}