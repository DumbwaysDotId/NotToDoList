import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left, Right,
  List, ListItem, CheckBox, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';
import axios from 'axios';

import TodoItem from '../components/TodoItem';

export default class Todos extends Component{

  constructor(){
    super();
    this.state = {
      count: 0,
      todos: []
    };
  }

  componentDidMount(){
    const self = this;
    axios.get(`http://192.168.1.102:8000/api/todos`).then((result)=>{
      self.setState({
        todos: result.data
      })
    });
  }

  _keyExtractor = (item, index) => item.id;

  render(){
    return (
      <Container>

        <Content>
          <List>
            <FlatList
              data={this.state.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TodoItem todo={item}/>}
            />
            {/*this.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )*/}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('TodosCreate') }>
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}
