import React,{Component} from 'react';
import { AppRegistry ,StyleSheet,View,Button,Text,Image,ScrollView,ListView} from 'react-native';

class Radio extends Component {
	constructor(props){
		super(props);
		this.state ={
		  isLoading:false,
		  dataSource:null,
		};
	}
	static navigationOptions = {
		tabBarLab : '电台',
		title : '电台',
		tabBarIcon : ({focused,tintColor}) => (
			<Image 
				source = {focused ? require('../images/main_bottom_radio_selected.png') : require('../images/main_bottom_radio.png')}
				style = {{width:26,height:26,tintColor:tintColor}}
			/>
		)
	};
	
	getRadioList() {
		fetch('https://fsapp.linker.cc/fslhsrv/srv/interactive/broadcastList',{
			method : 'post',
			body : JSON.stringify({appKey:'04021f876fdc',pageIndex:'0'})
		})
		.then((response) => response.json())
		.then((data) => {
			this.setState({
			 dataSource:new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(data.con),
             isLoading:false,
           });
		})
		.catch((error) => {
			resultJson : 'error';
			console.error("返回数据错误："+error);
		});
	}
	
	componentDidMount() {
		this.getRadioList();
	}
	
	renderRow(rowData) {
		return(
		  <View 
			style = {{flex:1,flexDirection:'row'}}>
			  <Image 
				style = {{width:80,height:80,margin:5}}
				source = {{uri: rowData.logoUrl}}/>
			<View 
			  style = {{flex:1}}>
			  <Text
				style= {styles.title}
				numberOfLines = {1}>
				{rowData.broadCastName}
			  </Text>
			  <Text
				style= {styles.content}
				numberOfLines = {1}>
				{rowData.con.name}
			  </Text>
			  <Text
				style= {styles.content}
				numberOfLines = {1}>
				{rowData.con.anchorperson}
			  </Text>
			</View>
		  </View>
		)
	}
	
	render() {
		if(!this.state.dataSource) {
			return (
				<Text></Text>
			);
		} else {
			return (
				<ListView
					dataSource = {this.state.dataSource}
					renderRow = {(rowData)=>this.renderRow(rowData)}
				>
				</ListView>
			);
		}
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


module.exports = Radio;
