import React, {Component} from 'react';
import {Container, Content, Text, Form, Item, Label, Input, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';

import {API_URL} from '../constants';
import {allTodos} from '../actions';

class TodosCreate extends Component{

  constructor(){
    super();
    this.state = {
      text: ""
    }
  }

  handleSubmit(){
    const text = this.state.text;
    const {goBack} = this.props.navigation;

    if(text){
      axios.post(`${API_URL}/todos`, {
        name: text
      }).then((result)=>{
        this.props.dispatch(allTodos());
        goBack();
      })
    }
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
          </Form>
        </Content>
        <Button full primary onPress={()=> this.handleSubmit()} style={styles.btnFooter}>
          <Text>Submit</Text>
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({

});

export default connect(mapStateToProps)(TodosCreate);

const styles = StyleSheet.create({
  btnFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})
