import React from 'react'

import { Container, Content, Title, Text, Cards, Card, ContainerBoost} from './styles'
import Button from '../Button'
import ShorteningUrl from '../ShorteningUrl'

import { ReactComponent as ReacognitionSvg } from '../../images/icon-brand-recognition.svg'
import { ReactComponent as RecordsSvg } from '../../images/icon-detailed-records.svg'
import { ReactComponent as CustomizableSvg } from '../../images/icon-fully-customizable.svg'
import { ReactComponent as BackBoostSvg } from '../../images/bg-boost-desktop.svg'


export default () => {
    return (
        <Container>
            <Content>
                <ShorteningUrl/>

                <Title>Advanced Statistics</Title>
                <Text>Track how your links are performing across the web with out advanced statistics dashboard.</Text>

                <Cards>
                    <Card>
                        <ReacognitionSvg/>
                        <h1>Brand Recognition</h1>
                        <p>Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>
                    </Card>
                    <Card>
                        <RecordsSvg/>
                        <h1>Detailed Records</h1>
                        <p>Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.</p>
                    </Card>
                    <Card>
                        <CustomizableSvg/>
                        <h1>Fully Customizable</h1>
                        <p>Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.</p>
                    </Card>
                </Cards>
                
            </Content>
            <ContainerBoost>
                <Title light>Boost your links today</Title>
                <Button>Get Started</Button>
            </ContainerBoost>
        </Container>
    )
}