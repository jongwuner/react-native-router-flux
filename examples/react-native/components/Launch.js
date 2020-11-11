import React from 'react';
import {View, Text, StyleSheet, Button, ActionSheetIOS} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {MessageBarManager} from 'react-native-message-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

class Launch extends React.Component {
  render() {
    return (
      <View {...this.props} style={styles.container}>
        <Text>ONLIEL</Text>
        <Text></Text>
        <Text></Text>
        <Button
          title="회원 모드"
          onPress={() =>
            Actions.login({data: 'Custom data', title: 'Custom title'})
          }
        />
        <Button 
          title="트레이너 모드" 
          onPress={() => 
            Actions.login2({data: 'Custom data', title: 'Custom title'})
          } />
        <Button 
          title="관리자 모드" 
          onPress={() => 
            Actions.login3({data: 'Custom data', title: 'Custom title'})
          } />

        {/* <Button
          title="Display Lightbox"
          onPress={() => Actions.demo_lightbox({data: 'passed data'})}
        />
        <Button
          title="Go to CustomNavBar page"
          onPress={() => Actions.customNavBar()}
        />
        <Button
          title="MessageBar alert"
          onPress={() =>
            MessageBarManager.showAlert({
              title: 'Your alert title goes here',
              message: 'Your alert message goes here',
              alertType: 'success',
              // See Properties section for full customization
              // Or check `index.ios.js` or `index.android.js` for a complete example
            })
          }
        /> */}
        {/*<Button title="Go to TabBar page" onPress={Actions.drawer} />*/}
        
      </View>
    );
  }
}

export default Launch;
