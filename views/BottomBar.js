import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';//底部导航栏
import Recommend from './Recommend'; //推荐
import Radio from './Radio';	//电台
import Mine from './Mine';	//我的
import Video from './Video';	//视频

const BottomBar = TabNavigator ({
	Recommend :{
		screen:Recommend,
	},
	Radio : {
		screen : Radio,
	},
	Video : {
		screen : Video,
	},
	Mine : {
		screen : Mine,
	},
},{
	tabBarOptions :{
		activeTintColor: '#DB4437',
		inactiveTintColor: '#000',
		showIcon: true,
		showLabel: true,
		upperCaseLabel: false,
		pressColor: '#ffffff',
		pressOpacity: 1,
		style: {
			backgroundColor: '#fff',
			paddingBottom: 0,
			borderTopWidth: 0.5,
			borderTopColor: '#ccc',
		},
		labelStyle: {
			fontSize: 12,
			margin: 1
		},
		indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
	tabBarPosition : 'bottom',
	swipeEnabled : true,
	animationEnabled : false,
	lazy : true,
	backBehavior : 'none',
})

module.exports = BottomBar;

