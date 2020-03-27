import { combineReducers } from 'redux';

import cardReducer from '../redux/cart/cart.reducer'

export default combineReducers({
    cardList: cardReducer
})