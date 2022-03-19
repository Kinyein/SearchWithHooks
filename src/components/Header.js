import React, { Component } from 'react'
import styled from 'styled-components'
import headerImg from '../images/bg-header-desktop.svg'  //importa la imagen de manera estatica

const HeaderDiv = styled.div`
    width: 100%;
    height: 140px;
    margin: -10px;
    background-color: hsl(180, 29%, 50%);
`

export default class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <img src={ headerImg } alt="" width="110%" height="100%"/>
            </HeaderDiv>
        )
    }
}
