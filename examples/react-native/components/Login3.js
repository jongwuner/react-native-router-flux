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

/*
const popToRoot = () => {
  Actions.popTo('launch');
};

const popToLogin1 = () => {
  Actions.popTo('loginModal');
};

const popToLogin2 = () => {
  Actions.popTo('loginModal2');
};

const popAndRefresh = () => {
  Actions.pop({
    refresh: {data: 'Data after pop', title: 'title after pop'},
    key: null,
  });
};
*/

export default class extends React.Component {
  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    return (
      <WebView source={{ uri: 'https://m-onliel.web.app/' }} style={{ marginTop: 20 }} />
    );
  }
}
