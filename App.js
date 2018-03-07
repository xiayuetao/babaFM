/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {showFuckWords:true};
		setInterval(()=>{
			this.setState({showFuckWords: !this.state.showFuckWords});
		},500);
	}
  render() {
	let fuckWords = this.state.showFuckWords ? this.props.text : '';
	let pic = {
		uri:'https://xloss.linker.cc/LTYT%2F201801%2F30%2F16%2FuBKCLdZVFtuSoPD9l6dqrdlNDpTr61ERI6p7R002018013016607.jpg'
	};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>{fuckWords}</Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
		<Image source={pic} style={{width:460,height:160}}/>
      </View>
    );
  }
}

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
