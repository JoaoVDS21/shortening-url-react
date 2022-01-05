import styled from 'styled-components'
import colors from '../../Colors'

import BackBoostSv from '../../images/bg-boost-desktop.svg'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: ${colors.neutral[0]};
    position: relative;
`
export const Content = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 0 120px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: ${props=>props.light?'#fff':colors.neutral[3]};
    font-size: 2rem;
    text-align: center;
    margin: ${props=>!props.light?'40px 0 10px 0':'0 0 15px 0'};
`
export const Text = styled.p`
    color: ${colors.neutral[1]};
    width: 50%;
    text-align: center; 
    margin: 0 auto;
`
export const Cards = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;    
    margin-top: 70px;
    margin-bottom: 100px;

    &::before{
        content: '';
        position: absolute;
        top: 150px;
        left: 0;
        width: 100%;
        height: 10px;
        background: ${colors.primary[0]}
    }
`
export const Card = styled.div`
    background: #fff;
    height: 240px;
    padding: 25px;
    border-radius: 7px;
    position: relative;

    svg{
        box-sizing: content-box;
        padding: 15px;
        background: ${colors.primary[1]};
        border-radius: 50%;
        overflow: visible;
        position: absolute;
        top: 0;
        left: 25px;
        transform: translateY(-50%);
    }
    h1{
        font-size: 1.15rem;
        color: ${colors.neutral[3]};
        margin: 25px 0 10px 0;
    }
    p{
        color: ${colors.neutral[1]}
    }

    &:nth-child(2){
        margin-top: 40px;
    }
    &:nth-child(3){
        margin-top: 80px;
    }
`

export const ContainerBoost = styled.div`
    width: 100%;
    padding: 60px 0;
    text-align: center;
    background-image: url(${BackBoostSv});
    background-size: cover;
    background-position: center;
    background-color: ${colors.primary[1]}
    
`