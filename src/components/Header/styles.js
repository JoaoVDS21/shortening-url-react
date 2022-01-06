import styled from 'styled-components'
import colors from '../../Colors'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 120px;
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    
    nav{
        display: flex;
        align-items: center;
    }

    nav a:first-child{
        margin: 0 20px 0 0;
    }

    nav a{
        font-size: .85rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.neutral[1]};
        margin: 0 15px;
        transition: .3s ease-in-out;

        &:hover{
            color: ${colors.neutral[3]};
        }
    }
`

export const SignButtons = styled.div`
    display: flex;
    align-items: center;

    a{
        color: ${colors.neutral[1]};
        margin: 0 30px;
        font-size: .85rem;
        transition: .3s ease-in-out;

        &:hover{
            color: ${colors.neutral[3]};
        }
    }
`