import React,{Component} from 'react';
import { AppRegistry ,View} from 'react-native';
import Homepage from './views/Homepage';

class Index extends Component {
	
	render() {
		return (
			<View style={{flex:1}}>
				<Homepage/>
			</View>
		);
	}
}

AppRegistry.registerComponent('HelloRN', () => Index);
