export function booksReducers(state={books:[{
    _id:1,
    title:'this is first book title',
    description: 'this is first book description',
    price: 10
  },
  {
    _id:2,
    title:'this is second book title',
    description: 'this is second book descriptions',
    price: 40
  }]},action){
    switch(action.type){
      case "GET_BOOKS":
        return {...state,books:[...state.books]}
      case "POST_BOOK":
        //let books = state.books.concat(action.payload)
        return {books:[...state.books,...action.payload]};
        break;
      case "DELETE_BOOK":
        let currentBookToDelete = [...state.books]
        const indexToDelete = currentBookToDelete.findIndex(function(book){
           return book._id == action.payload._id;
        })
        return {books:[...currentBookToDelete.slice(0,indexToDelete),...currentBookToDelete.slice(indexToDelete +1)]}
        break;
      case "UPDATE_BOOK":
        let currentBookToUpdate = [...state.books]
        const indexToUpdate = currentBookToUpdate.findIndex(function(book){
           return book._id == action.payload._id;
        })
        const newBookToUpdate = {
          ...currentBookToUpdate[indexToUpdate],
          title: action.payload.title
        };
        return {books:[...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate,...currentBookToUpdate.slice(indexToUpdate +1)]}
        break;
    }
    return state
}
