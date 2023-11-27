import {ActionTypes} from '../constants/index'

const initialState = {
  products : [{
    id:1,
  }]
};

export const productReducer = (state=initialState,{type,payload})=>{
   switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return state;
    case ActionTypes.SELECTED_PRODUCTS:
        return state;
    default:
        return state
   }
}