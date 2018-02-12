export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SEARCH_KEYWORD = 'SEARCH_KEYWORD';
export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';

export function editUser({_id,name, age}){
  return {
    type: EDIT_USER,
    name,
    age,
    _id
  }
}
export function deleteUser(id){
  return {
    type: DELETE_USER,
    id
  }
}
export function changeKeyword(keyword){
  return {
    type: CHANGE_KEYWORD,
    keyword
  }
}
