import React, {Component} from 'react';
import {Container, Content, Text, Form, Item, Label, Input, Button} from 'native-base';
import axios from 'axios';

export default class TodosCreate extends Component{

  constructor(){
    super();
    this.state = {
      text: ""
    }
  }

  handleSubmit(){
    const text = this.state.text;
    const {goBack} = this.props.navigation;

    axios.post(`http://192.168.1.102:8000/api/todos`, {
      name: text
    }).then((result)=>{
      goBack();
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Not Todo</Label>
              <Input onChangeText={(text) => this.setState({text})}/>
            </Item>
            <Button full primary onPress={()=> this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
