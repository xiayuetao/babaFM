import React,{Component} from 'react';
import { AppRegistry ,StyleSheet,View,Button,Text,Image,ScrollView,ListView} from 'react-native';
import {TabNavigator} from 'react-navigation';//底部导航栏
import Swiper from 'react-native-swiper';//banner

const IMGS = [
  'http://cdn.linker.cc/FSYT%2F201802%2F12%2F10%2FEE2018021210869.png',
  'http://cdn.linker.cc/FSYT%2F201802%2F26%2F18%2F4NT22KFdUaNC6Gh7gxfo2018022618815.png',
  'http://cdn.linker.cc/FSYT%2F201802%2F09%2F17%2FDmUYUeiXl8cNCZceRf47iYeagOxx2018020917814.jpg',
  'http://cdn.linker.cc/FSYT%2F201802%2F27%2F11%2Fy3uqFpjNBd8epeOpfABL2018022711594.jpg',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

class Recommend extends Component {
	constructor(props){
		super(props);
		this.state ={
		  isLoading:false,
		  dataSource:null,
		  bannerList:null,
		};
	}
	static navigationOptions = {
		tabBarLab : '热门',
		title : '热门',
		tabBarIcon : ({focused,tintColor}) => (
			<Image 
				source = {focused ? require('../images/main_bottom_recommend_selected.png') : require('../images/main_bottom_recommend.png')}
				style = {{width:26,height:26,tintColor:tintColor}}
			/>
		)
	};
	getIndex() {
		fetch('https://fsapp.linker.cc/fslhsrv/srv/interactive/index',{
			method : 'post',
			body : JSON.stringify({version:'3.3.4',mobileId:'65540'})
		})
		.then((response) => response.json())
		.then((data) => {
			this.setState({
			 dataSource:new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(data.bannerList),
             isLoading:false,
           });
		})
		.catch((error) => {
			resultJson : 'error';
			console.error("返回数据错误："+error);
		});
	}
	
	componentDidMount() {
		this.getIndex();
	}
	
	renderBanner() {
		return(
			<Swiper
                height={150}
                horizontal={true}
                autoplay={true}
                loop={true}
                paginationStyle={{ bottom: 1 }}
                showsPagination={true}
                index={0}
                dotStyle={{ backgroundColor: 'rgba(234,32,0,.2)', width: 6, height: 6 }}
                activeDotStyle={{ backgroundColor: 'rgba(333,0,0,.5)', width: 6, height: 6 }}>
                <View style={styles.bigImage}>
                    <Image style={styles.bigImage} source={{uri:IMGS[0]}}></Image>
                </View>
                <View style={styles.bigImage}>
                    <Image style={styles.bigImage} source={{uri:IMGS[1]}}></Image>
                </View>
                <View style={styles.bigImage}>
                    <Image style={styles.bigImage} source={{uri:IMGS[2]}}></Image>
                </View>
                <View style={styles.bigImage}>
                    <Image style={styles.bigImage} source={{uri:IMGS[3]}}></Image>
                </View>
            </Swiper>
		);
	}
	
	renderRow(rowData) {
		return(
		  <View 
			style = {{flex:1}}>
			  <Image 
				style = {{width:400,height:150,marginTop:20}}
				source = {{uri: rowData.url}}/>
			<View 
			  style = {{flex:1}}>
			  <Text
			  style= {styles.title}
				numberOfLines = {1}>
				{rowData.title}
			  </Text>
			</View>
		  </View>
		)
	}
	
	render() {
		if(!this.state.dataSource) {
			return(
				<Text> </Text>
			);
		} else {
			return (
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData)=>this.renderRow(rowData)}
					renderHeader={()=>this.renderBanner()}
					removeClippedSubviews={false}/>
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


module.exports = Recommend;
