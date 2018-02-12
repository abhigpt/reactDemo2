import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {Link} from 'react-router-dom'

class Menu extends React.Component{
  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
        />
        <Drawer open={true}>
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/about">About</Link></MenuItem>
          <MenuItem><Link to="/users">Users</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Menu
