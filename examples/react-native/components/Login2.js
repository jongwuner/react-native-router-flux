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
});

export default class extends React.Component {
  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    return (
      <WebView source={{ uri: 'https://t-onliel.web.app/' }} style={{ marginTop: 20 }} />
    );
  }
}
