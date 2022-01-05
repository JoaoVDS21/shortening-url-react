import styled from 'styled-components'

import colors from '../../Colors'

export const Container = styled.div` 
    width: 100%;
    max-width: 1440px;
    padding: 30px 0px 120px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`

export const Information = styled.div`
    width: 50%; 
    display: flex;
    flex-wrap: wrap;

    h1{
        font-size: 4rem;
        line-height: 1.15em;
        color: ${colors.neutral[3]};
    }
    p{
        width: 80%;
        color: ${colors.neutral[1]};
        margin-bottom: 40px;
    }
`