const initialState = {
    loading: true,
    plants: []  
}

const plantsReducer = (state=initialState, action) => {
    switch(action.type) {
        case"LOADING":
            return {
                ...state,
                loading: true
            }
        case "LOAD_PLANTS":
            return {
                ...state,
                loading: false,
                plants: action.plants
            }
            case "ADD_PLANT":
                return{
                    ...state,
                    loading: false,
                    plants: [...state.plants, action.plant]
                }
        default:
            return state;
    }
}

export default plantsReducer;