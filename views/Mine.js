import React,{Component} from 'react';
import { AppRegistry ,StyleSheet,View,Button,Text,Image,ScrollView,ListView} from 'react-native';
import App from '../App';

class Mine extends Component {
	static navigationOptions = {
		tabBarLab : '我的',
		title : '我的',
		tabBarIcon : ({focused,tintColor}) => (
			<Image 
				source = {focused ? require('../images/main_bottom_user_selected.png') : require('../images/main_bottom_user.png')}
				style = {{width:26,height:26,tintColor:tintColor}}
			/>
		)
	};
	render() {
		return (
			<ScrollView>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
				<App/>
			</ScrollView>
		);
	}
	
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title : {
	  margin:5,
	  color:'black',
	  fontSize:14,
	  fontWeight:'bold',
  },
  content: {
	  margin:5,
	  fontSize:13,
  },
  bigImage : {
	  width:400,
	  height:150,
  }
  
});


module.exports = Mine;
