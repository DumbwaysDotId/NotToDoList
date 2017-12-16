import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left, Right,
  List, ListItem, CheckBox
} from 'native-base';

import TodoItem from './components/TodoItem';

export default class App extends Component{

  todos = [
    {
      id: "1",
      todo: "First Not To Do"
    },
    {
      id: "2",
      todo: "Second Not To Do"
    },
    {
      id: "3",
      todo: "Third Not To Do"
    },
  ];

  render(){
    return (
      <Container>
        <Header>
          <Body>
            <Text>Not To Do List</Text>
          </Body>
        </Header>

        <Content>
          <List>
            {this.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )}
          </List>
        </Content>
      </Container>
    );
  }
}
