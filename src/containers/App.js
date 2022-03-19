import React, { Component } from 'react'
import Header from '../components/Header'
import Jobs from '../components/Jobs'
import styled from 'styled-components'

const BGMargin = styled.div`
  
`

export default class App extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <Jobs/>
      </div>
    )
  }
}
