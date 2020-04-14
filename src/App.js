import React from 'react'
import Header from './components/Header'

function App(){
  return (
    <>
      <Header title="HomePage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="projects">
        <ul>
          <li>Financas</li>
          <li>login</li>
        </ul>
      </Header>
    </>
  )
}

export default App;