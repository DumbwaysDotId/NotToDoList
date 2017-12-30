import React, {Component} from 'react';
import {Body, Left, Right, ListItem, CheckBox, Text} from 'native-base';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class TodoItem extends Component{

  state = {
    isDone: false
  }

  componentDidMount(){
    const {todo: {isDone}} = this.props;

    this.setState({isDone: Boolean(isDone)});
  }

  handleDone(){
    const {todo: {id}} = this.props;

    this.setState({
      isDone: !this.state.isDone
    });

    axios.patch(`http://192.168.1.102:8000/api/todos/${id}`, {
      isDone: this.state.isDone? 0: 1
    });
  }

  render(){
    const {todo: {id, name}} = this.props;

    return (
      <ListItem key={id}>
        <Left>
          <CheckBox checked={this.state.isDone} onPress={()=> this.handleDone()}/>
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
