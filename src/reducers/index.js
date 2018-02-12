import {combineReducers} from 'redux';
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';
import usersReducer from './usersReducer';
import modalReducer from './modalReducer';
import keywordReducer from './keywordReducer';

export default combineReducers({
  books:booksReducers,
  cart: cartReducers,
  usersList: usersReducer,
  editModal: modalReducer,
  keyword: keywordReducer
})
