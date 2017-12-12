import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class App extends Component{

  handleClick(){
    alert('Clicked!');
  }

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={()=> this.handleClick()}
          style={{backgroundColor: '#D0D0D0', padding: 10}}
        >
          <Text>Click Me!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
