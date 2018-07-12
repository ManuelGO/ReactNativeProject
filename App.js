/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native'
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Albums!'} />  
        <AlbumList />
      </View>
    );
  }
}
