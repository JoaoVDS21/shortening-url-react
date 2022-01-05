import styled from 'styled-components'
import colors from '../../Colors'

export const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
`

export const ShorteningContainer = styled.div`
    width: 100%;
    padding: 2.3rem 2.7rem;
    background: ${colors.primary[1]};
    border-radius: 7px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;
    position: relative;
    overflow: hidden;
    z-index: 0;
    transform: translateY(-50%);

    svg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`
export const InputUrl = styled.input`
    padding: .6rem 1.5rem;
    border-radius: 7px;
    border: none;
    outline: none;
    color: ${colors.primary[1]};
`