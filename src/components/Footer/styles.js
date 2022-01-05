import styled from 'styled-components'

import colors from '../../Colors'

export const Container = styled.div`
    width: 100%;
    display: flex;
    background: ${colors.neutral[3]};
    padding: 60px 0;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 0 120px;
    display: flex;
    justify-content: space-between;
`

export const OtherLinks = styled.div`
    width: 65%; 
    display: flex;
    justify-content: space-between;
`
export const GroupLink = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff; 

    p{
        margin-bottom: 10px;
    }
    a{
        color: ${colors.neutral[1]};
        font-size: .85rem;
        margin: 5px 0;
    }
`
export const SocialMedias = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    
    svg{
        margin: 0 10px;
        transition: .4s ease-in-out;

        &:hover{
            transform: translateY(-4px);
        }
    }
    
`