import React from 'react';
import {connect} from 'react-redux';
import {changeKeyword} from '../../actions/users';

class Search extends React.Component{
  handleInputChange = (event) => {
    this.props.changeKeyword(event.target.value);
  }
  render(){
    return(
      <form >
        <label>Search by name: <input type = "text" value={this.props.keyword} onChange={this.handleInputChange}/> </label>
      </form>
    )
  }
}
export default connect((state) => ({keyword: state.keyword}), {changeKeyword})(Search);
