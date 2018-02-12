import {EDIT_USER, DELETE_USER} from '../actions/users';
import usersList from '../components/api/usersList';

export default function usersReducer(state = usersList, action) {
  console.log(usersList);
  switch(action.type) {
    case EDIT_USER:
      return usersList.map((user) => {
            if(user._id === action._id) {
              return {...user, name: action.name, age: action.age}
            }
            return user
      })
    case DELETE_USER:
      return usersList.filter((user) => user._id !== action.id)
    default:
      return state
  }
  return state
}
