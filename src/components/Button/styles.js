import styled from 'styled-components'
import colors from '../../Colors'

export const Button = styled.button`
    padding: 9px 30px;
    color: #fff;
    background: ${colors.primary[0]};
    border-radius: ${props=>props.changeTo.shorten?'7px':'100px'};
    outline: none;
    border: none;
    ${props=>props.changeTo.signup ? 'font-size: .85rem;' : 'font-size: 1rem; font-weight: bold;'}
    transition: .4s ease-in-out;

    &:hover{
        opacity: .85;
        transform: translateY(-3px);
        cursor: pointer;
    }
`