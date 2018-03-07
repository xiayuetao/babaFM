import React,{Component} from 'react';
import { AppRegistry ,View,Button,Text,Image} from 'react-native';
import BottomBar from './BottomBar'

export default class Index extends Component {
	render() {
		return (
			<View style={{flex:1}}>
				<BottomBar/>
			</View>
		);
	}
}

