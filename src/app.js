"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {Router} from 'react-router';

import Home from './components/pages/home';
import About from './components/pages/about';
import Users from './components/pages/users';
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

const AddExpensePage = ()=>
  (
    <div> Hello this is the default world  </div>
  )

  const CheckingPage = ()=>
    (
      <div> Welcome Abhishek in the reactWorld </div>
    )

const Routes = (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
        <Menu />
        <div style={{margin: '0 100px 0 400px'}}>
        <Switch >
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/users" component={Users}/>
        </Switch>
      </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>

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
