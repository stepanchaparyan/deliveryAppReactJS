export const addNewShop = (state) => {
    return { type: 'ADD_SHOP', value: state }
};

export const addNewShopAsync = (state) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(addNewShop(state));
        }, 500)
    }
};

export const addNewProduct = (state) => {
    return {
        type: 'ADD_PRODUCT', value: state }
};

