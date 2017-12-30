import React, {Component} from 'react';
import {Body, Left, Right, ListItem, CheckBox, Text} from 'native-base';
import PropTypes from 'prop-types';

export default class TodoItem extends Component{

  render(){
    const {todo: {id, name}} = this.props;

    return (
      <ListItem key={id}>
        <Left>
          <CheckBox checked={false}/>
        </Left>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right/>
      </ListItem>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
