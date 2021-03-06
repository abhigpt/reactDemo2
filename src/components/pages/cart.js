"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal,Panel, Col, Row, Well, Button,ButtonGroup, Label} from 'react-bootstrap';
import {deleteCartItem,updateCart} from '../../actions/cartActions';

class Cart extends React.Component{
  onDelete(_id){
    let currentBookToDelete = this.props.cart
    const indexToDelete = currentBookToDelete.findIndex(function(cart){
       return cart._id == _id;
    })
    let cartAfterDelete = [...currentBookToDelete.slice(0,indexToDelete),...currentBookToDelete.slice(indexToDelete +1)]
    this.props.deleteCartItem(cartAfterDelete)
  }
  onIncrement(_id){
    console.log("called------")
    this.props.updateCart(_id,1)
  }
  onDecrement(_id){
    this.props.updateCart(_id,-1)
  }
  render(){
    if(this.props.cart[0]){
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }

  renderEmpty(){
    return(<div></div>)
  }

  renderCart(){
    const cartItemsList = this.props.cart.map(function(cartArr){
      return (
        <Panel key = {cartArr._id}>
          <Row>
            <Col xs = {12} sm = {4}>
              <h6>{cartArr.title}</h6><span>  </span>
            </Col>
            <Col xs = {12} sm = {4}>
              <h6>{cartArr.price}</h6>
            </Col>
            <Col xs = {12} sm = {4}>
              <h6>{cartArr.description}</h6>
            </Col>
            <Col xs = {12} sm = {2}>
              <h6>qty. <Label bsStyle = "success">{cartArr.quantity} </Label></h6>
            </Col>

            <Col xs = {6} sm = {4}>
              <ButtonGroup style = {{minWidth: '300px'}}>
                  <Button onClick = {this.onDecrement.bind(this,cartArr._id)} bsStyle = "default" bsSize= "small">-</Button>
                  <Button onClick = {this.onIncrement.bind(this,cartArr._id)} bsStyle = "default" bsSize= "small">+</Button>
                  <span>     </span>
                  <Button onClick = {this.onDelete.bind(this,cartArr._id)} bsStyle = "danger" bsSize = "small"> DELETE </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    },this)
    return (
      <Panel header = "Cart" bsStyle = "primary">
        {cartItemsList}
        <Row>
          <Col xs = {12}>
            <h6>Total Amount:</h6>
            <Button bsStyle = "success" bsSize = "small">
              PROCEED TO CHECKOUT
            </Button>
          </Col>
        </Row>

      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCartItem:deleteCartItem,
    updateCart:updateCart
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
