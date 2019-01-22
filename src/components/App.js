import React from 'react'
import { connect } from 'react-redux'
import { Increment } from './Increment'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <h2>This is my app.</h2>

        {
          this.props.increments.map((increment, index) => {
            return <Increment key={index} count={increment} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  increments: state.increments
})

export default connect(mapStateToProps)(App)
