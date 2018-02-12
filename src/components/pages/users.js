import React from 'react';
import UsersList from '../api/usersList';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {toggleModal} from '../../actions/modal';
import {editUser, deleteUser} from '../../actions/users';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EditUsersDetails from './editUsersDetails';
import Search from './search';

class Users extends React.Component {

  render(){

    return (
      <div>
        <Search />
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            >
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Age</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.usersList.map((user) => (
              <TableRow key={user._id}>
                <TableRowColumn>{user.name}</TableRowColumn>
                <TableRowColumn>{user.age}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton label="Edit" primary={true} onClick={this.props.toggleModal.bind(this, user._id)}/>
                  <FlatButton label="Delete" secondary={true} onClick={this.props.deleteUser.bind(this, user._id)}/>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         <EditUsersDetails usersList={this.props.usersList} editUser={this.props.editUser} id={this.props.editModal.id} isVisible= {this.props.editModal.isVisible} toggleModal={this.props.toggleModal}/>
     </div>
    )
  }
  }

  function mapStateToProps(state){
    return {
      editModal: state.editModal,
      usersList: state.usersList.filter((user)=> {
        if(state.keyword&& user.name.toLowerCase().indexOf(state.keyword.toLowerCase())===-1) {
            return false
        }
        return true
      })

    }
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      toggleModal: toggleModal,
      editUser: editUser,
      deleteUser: deleteUser
    },dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Users);
