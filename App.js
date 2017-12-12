import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left, Right,
  List, ListItem, CheckBox
} from 'native-base';

export default class App extends Component{

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

            <ListItem>
              <Left>
                <CheckBox checked={false}/>
              </Left>
              <Body>
                <Text>First Item</Text>
              </Body>
              <Right/>
            </ListItem>

            <ListItem>
              <Left>
                <CheckBox checked={true}/>
              </Left>
              <Body>
                <Text>Second Item</Text>
              </Body>
              <Right/>
            </ListItem>

          </List>
        </Content>
      </Container>
    );
  }
}
