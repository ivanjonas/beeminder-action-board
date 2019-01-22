const incrementsDefaultState = [5, 10, 20]

export default (state = incrementsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INCREMENT':
      return [...state, action.count]
    default:
      return state
  }
}
