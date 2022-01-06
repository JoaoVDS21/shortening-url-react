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

export const ShortedLinks = styled.div`
    width: 100%;
    margin-top: -3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ShortedLink = styled.div`
    width: 100%;
    padding: 15px 20px 15px 30px;
    display: grid;
    grid-template-columns: 8fr 3fr 1fr;
    grid-gap: 20px;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 7px;
`

export const Default = styled.p`
    display: flex;
    align-items: center;
    color: ${colors.neutral[3]};
`
export const Shorted = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${colors.primary[0]};
`
