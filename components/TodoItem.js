import React, {Component} from 'react';
import {Body, Left, Right, ListItem, CheckBox, Text} from 'native-base';
import PropTypes from 'prop-types';

export default class TodoItem extends Component{

  render(){
    const {todo: {id, todo}} = this.props;

    return (
      <ListItem key={id}>
        <Left>
          <CheckBox checked={false}/>
        </Left>
        <Body>
          <Text>{todo}</Text>
        </Body>
        <Right/>
      </ListItem>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
