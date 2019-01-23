import React from 'react'
import IncrementsList from './IncrementsList'

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <h2>This is my app.</h2>

        <IncrementsList />
      </div>
    )
  }
}
