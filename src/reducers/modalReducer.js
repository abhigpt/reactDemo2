import {TOGGLE_MODAL} from '../actions/modal'

export default function modalReducer(state ={isVisible: false}, action) {
  switch (action.type){
    case TOGGLE_MODAL:
      return {
        isVisible: !state.isVisible,
        id: action.id
      }
    default:
      return state
  }
}
