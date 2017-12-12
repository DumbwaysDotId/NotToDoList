import React from 'react';
import {View, Text} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default ()=> (
  <View style={{flex: 1, justifyContent: 'center'}}>
    <Header title="Not To Do List" color="yellow"/>
    <Body/>
  </View>
);
