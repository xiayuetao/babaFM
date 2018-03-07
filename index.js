import React,{Component} from 'react';
import { AppRegistry ,View,ScrollView,Text} from 'react-native';
import App from './App';
import FlexBox from './FlexBox';
import BottomBar from './views/BottomBar';

class Index extends Component {
	
	render() {
		return (
			<View style={{flex:1}}>
				<BottomBar/>
			</View>
		);
	}
}

AppRegistry.registerComponent('HelloRN', () => Index);
