/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
} from 'react-native';

type Props = {};
export default class FlexBox extends Component<Props> {
  constructor(props) {
	  super(props);
	  this.state = {text:''};
  }
  render() {
	let fuckWords = '我擦叻  我怎么横向了？！';
	let pic = {
		uri:'http://xloss.linker.cc/LTYT%2F201610%2F14%2F15%2Fjpg2016101415713.jpg'
	};
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{fuckWords}</Text>
		<Image source={pic} style={{width:80,height:80}}/>
		
		<TextInput 
			style={{width:400,height:40}}
			placeholder='说一句脏话' 
			onChangeText={(txt) => this.setState({text:txt})}
		/>
		<Text style={styles.welcome}>
			{this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
	backgroundColor:'pink',
  },
  welcome: {
	flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
	backgroundColor:'red',
  },
  instructions: {
	flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
	backgroundColor:'blue',
  },
});
