import React from 'react'
import IncrementsList from './IncrementsList'
import { AddIncrementForm } from './AddIncrementForm'

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <h2>This is my app.</h2>

        <IncrementsList />
        <AddIncrementForm />
      </div>
    )
  }
}
