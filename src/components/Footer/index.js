import React from 'react'
import { Container, Content, OtherLinks, GroupLink, SocialMedias } from './styles'

import { ReactComponent as BrandSvg} from '../../images/logo.svg'
import { ReactComponent as FacebookSvg} from '../../images/icon-facebook.svg'
import { ReactComponent as TwitterSvg} from '../../images/icon-twitter.svg'
import { ReactComponent as PinterestSvg} from '../../images/icon-pinterest.svg'
import { ReactComponent as InstagramSvg} from '../../images/icon-instagram.svg'

export default () => {
    return (
        <Container>
            <Content>
                <a href="#">
                    <BrandSvg style={{filter: 'grayscale(100%) brightness(0) invert(100%)'}}/>
                </a>
                <OtherLinks>
                    <GroupLink>
                        <p><strong>Features</strong></p>
                        <a href="#">Link Shortening</a>
                        <a href="#">Branded Links</a>
                        <a href="#">Analytics</a>
                    </GroupLink>
                    <GroupLink>
                        <p><strong>Resources</strong></p>
                        <a href="#">Blog</a>
                        <a href="#">Developers</a>
                        <a href="#">Support</a>
                    </GroupLink>
                    <GroupLink>
                        <p><strong>Company</strong></p>
                        <a href="#">About</a>
                        <a href="#">Our Team</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </GroupLink>
                    <SocialMedias>
                        <FacebookSvg/>
                        <TwitterSvg/>
                        <PinterestSvg/>
                        <InstagramSvg/>
                    </SocialMedias>

                </OtherLinks>
            </Content>
        </Container>
    )
}