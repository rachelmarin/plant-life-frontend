export const fetchPlants = () => {
  return dispatch => {
    dispatch({type: "LOADING"})
    fetch('http://localhost:3001/plants')
    .then(resp => resp.json())
    .then(plants => dispatch({
          type: "LOAD_PLANTS",
          plants
          
       }))
    }
  
  }
  
  export const addPlant = plant => {
    return {
      type: "ADD_PLANT",
      plant
    }
  }