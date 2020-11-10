import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class extends React.Component {
  static onEnter = () => {
    Actions.refresh({
      title: '온리엘 멤버쉽'
    });
  };

  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    console.log('Login RENDER');
    return (
      <WebView source={{ uri: 'https://onliel.web.app/' }} style={{ marginTop: 20 }} />
    );
  }
}
