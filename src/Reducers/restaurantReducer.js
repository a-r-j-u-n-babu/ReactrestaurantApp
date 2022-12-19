import { R_SUCESS, R_FAILURE } from "../constants/restaurantConstants.js";
export const restaurantListReducer = (state = { restaurantList: [] }, action) => {
    switch (action.type) {
        case R_SUCESS:
            return {
                restaurantList:action.payload
            }
        case R_FAILURE:
            return {
              restaurantList: action.console.error
            }
        default:
            return state
    }
}