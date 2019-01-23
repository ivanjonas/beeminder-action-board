import React from 'react'
import { connect } from 'react-redux'
import { addIncrement } from '../actions/increments'

class AddIncrementForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault()
    const submittedValue = parseInt(e.target.querySelector('[type=number]').value, 10)
    if (this.props.increments.includes(submittedValue)) {
      console.log(`${submittedValue} is already in the list of increments.`)
    } else {
      this.props.dispatch(addIncrement(submittedValue))
      console.log(`Adding new value ${submittedValue} to the list of increments`)
    }
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        My Form:
        <input type='number' />
        <input type='submit' value='' hidden />
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  increments: state.increments
})

const connectedComponent = connect(mapStateToProps)(AddIncrementForm)

export { connectedComponent as AddIncrementForm }
