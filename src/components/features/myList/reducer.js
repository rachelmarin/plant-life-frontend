const listReducer = (state=[]. action) => {
    switch(action.type) {
      case 'ADD':  
      return [...state, action.payload]

      case 'REMOVE':
         const firstMatchIndex  = state.indexOf(action.payload)
         return state.filter((plant, index) => index !== firstMatchIndex)
    }
}

export default listReducer;