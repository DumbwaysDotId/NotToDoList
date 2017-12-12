import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Body extends Component{

  render(){
    const {color, title} = this.props;

    return (
      <View style={{backgroundColor: color}}>
        <Text>{title}</Text>
      </View>
    );
  }
}
