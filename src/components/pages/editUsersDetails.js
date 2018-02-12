import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class EditUsersDetails extends React.Component {
  handleClose = () => {
    this.props.toggleModal()
  }
  submitDetails = () => {
    this.props.editUser({_id: this.props.id, name: this.name.value, age: this.age.value})
    this.props.toggleModal()
  }
  render() {
    let {usersList, id, isVisible} = this.props;
    let getUserDetails =  usersList.find((user) => id === user._id) || '';
      // console.log('h232',getUserDetails())
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.submitDetails}
      />
    ];

    return (
      <Dialog
         title="Edit Details"
         actions={actions}
         modal={false}
         open={isVisible}
       >
      <form>
        <label>Name: <input defaultValue={getUserDetails["name"]} ref={(input) => {this.name = input}}/></label>
        <label>Age: <input defaultValue={getUserDetails["age"]} ref={(input) => {this.age = input}}/></label>
      </form>
    </Dialog>
    )
  }
}

export default EditUsersDetails;
