"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
//import {Router} from 'react-router';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './components/menu';
console.log(addToCart);

const middleware = applyMiddleware(logger);
const store = createStore(reducers,middleware);
// store.subscribe(function(){
//   console.log("state is ",store.getState());
// })

const AddExpensePage = () =>
  (
    <div>Hi comp</div>
  )

  const CheckingPage = ()=>
    (
      <div>Hello AbhishekGupta </div>
    )

const Routes = (
  // <Provider store={store}>
  //     <BrowserRouter>
  //       <div>
  //       <Menu />
  //       <Switch>
  //           <Route exact path="/" component={BooksList}/>
  //           <Route path = "/create" component={AddExpensePage}/>
  //           <Route path="/admin" component={BooksForm}/>
  //           <Route path="/cart" component={Cart}/>
  //       </Switch>
  //       </div>
  //     </BrowserRouter>
  // </Provider>
  <Provider store = {store}>
    <BrowserRouter>
      <div>
        <Route exact path = "/" component = {AddExpensePage}/>
        <Route exact path = "/creates" component = {CheckingPage}/>
      </div>

  </BrowserRouter>
</Provider>
)

render(
  Routes, document.getElementById('app')
);

// render(
//   <Provider store = {store}>
//     <div>
//       <Menu />
//       <BooksList />
//     </div>
//   </Provider>,document.getElementById('app')
// )

// store.dispatch(postBooks(
//   [{
//   id:1,
//   title:'this is first book title',
//   description: 'this is first book description',
//   price: 10
//   },
//   {
//   id:2,
//   title:'this is second book title',
//   description: 'this is second book descriptions',
//   price: 40
//   }])
// )

// store.dispatch({
//   type: "POST_BOOK",
//   payload: [{
//     id:3,
//     title:'this is third book title',
//     description: 'this is third book description',
//     price: 10
//   }]
// })

// store.dispatch(deleteBooks({id:1}))
// store.dispatch(updateBooks({
//   id:2,
//   title:"Learn react"
// }))



store.dispatch(addToCart([{id:2 }]))
