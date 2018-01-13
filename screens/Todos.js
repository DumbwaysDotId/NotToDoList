import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left, Right,
  List, ListItem, CheckBox, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';

import TodoItem from '../components/TodoItem';
// import TryRedux from '../components/TryRedux';
import {API_URL} from '../constants';

class Todos extends Component{

  componentDidMount(){
    this.props.dispatch({
      type: 'ALL_TODOS',
      payload: axios.get(`${API_URL}/todos`)
    })
  }

  _keyExtractor = (item, index) => item.id;

  render(){
    return (
      <Container>

        <Content>
          <List>
            <FlatList
              data={this.props.todosReducer.todos}
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

const mapStateToProps = (state)=>({
  todosReducer: state.todosReducer
});

export default connect(mapStateToProps)(Todos);
