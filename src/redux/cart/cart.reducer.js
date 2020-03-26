const INIRIAL_STATE = {
    cartItems: {}
}



const cartReducer = (state = INIRIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {

            }
        default:
            return state
    }
} 

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
})


export default cartReducer