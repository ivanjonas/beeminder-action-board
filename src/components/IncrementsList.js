import React from 'react'
import { connect } from 'react-redux'
import { Increment } from './Increment'

const IncrementsList = (props) => (
  <div>
    {
      props.increments.map((increment, index) => {
        return <Increment key={index} count={increment} />
      })
    }
  </div>
)

const mapStateToProps = (state) => ({
  increments: state.increments
})

export default connect(mapStateToProps)(IncrementsList)
