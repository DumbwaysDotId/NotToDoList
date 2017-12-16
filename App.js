import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left, Right,
  List, ListItem, CheckBox
} from 'native-base';
import {FlatList} from 'react-native';

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

  _keyExtractor = (item, index) => item.id;

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
            <FlatList
              data={this.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TodoItem todo={item}/>}
            />
            {/*this.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )*/}
          </List>
        </Content>
      </Container>
    );
  }
}
