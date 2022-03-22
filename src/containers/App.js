import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Jobs from '../components/Jobs'
import styles from '../css/styles.css'

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
