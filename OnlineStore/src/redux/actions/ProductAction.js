import { ActionTypes } from "../constants/index"  

export const setProduct = (product)=>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : product
    };
};

export const selectedProduct = (product)=>{
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : product
    };
};
export const removeProduct = (product)=>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload : product
    };
};

