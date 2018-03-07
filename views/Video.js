import React,{Component} from 'react';
import { AppRegistry ,StyleSheet,View,Button,Text,Image,ScrollView,ListView} from 'react-native';
import App from '../App';

class Video extends Component {
	static navigationOptions = {
		tabBarLab : '视频',
		title : '视频',
		tabBarIcon : ({focused,tintColor}) => (
			<Image 
				source = {focused ? require('../images/main_bottom_video_selected.png') : require('../images/main_bottom_video.png')}
				style = {{width:26,height:26,tintColor:tintColor}}
			/>
		)
	};
	render() {
		return (
			<View style = {styles.container}>
				<App/>
				<App/>
				<App/>
			</View>
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


module.exports = Video;
