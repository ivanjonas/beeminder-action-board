import React from 'react'

export class Increment extends React.Component {
  render () {
    return (
      <div className='Increment'>
        <div>{this.props.count}</div>
      </div>
    )
  }
}
