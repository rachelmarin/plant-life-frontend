export const fetchPlants = () => {
    return {
        type: "LOAD_PLANTS"
    }  
  }
  
  export const addPlant = plant => {
    return {
      type: "ADD_PLANT",
      plant
    }
  }