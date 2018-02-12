import {TOGGLE_MODAL, CHANGE_KEYWORD} from '../actions/users'

export default function keywordReducer(state ='', action) {
  switch (action.type){
    case CHANGE_KEYWORD:
      return action.keyword
    default:
      return state
  }
}
