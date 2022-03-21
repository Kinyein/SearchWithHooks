import React, { Component } from 'react'
import styled from 'styled-components'
import headerImg from '../images/bg-header-desktop.svg'  //importa la imagen de manera estatica

const HeaderDiv = styled.div`
    width: 100%;
    height: 140px;
    background-color: hsl(180, 29%, 50%);
    margin-bottom: 50px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    
    @media (max-width: 500px){
        content: url(https://i.ibb.co/QJfZZ5f/imagen-2022-03-20-193542-removebg-preview.png);    
    }
`

export default class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <Img src={headerImg} alt=""/>
            </HeaderDiv>
        )
    }
}