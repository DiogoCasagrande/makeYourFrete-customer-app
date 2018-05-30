//External Libraries
import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image, Platform } from 'react-native'

//Screen Presentations
import About from '../app/pages/About/AboutPresentation'
import ForgotPassword from '../app/pages/Forgot-Password/Forgot-PasswordPresentation';
import Login from '../app/pages/Login/LoginPresentation';
import UserHome from '../app/pages/User-Home/UserHomePresentation';
import DrawerMenu from '../app/pages/DrawerMenu/DrawerPresentation';
import PropouseFeed from '../app/pages/Propouse-Feed/PropouseFeedPresentation';
import Propouse from '../app/pages/Propouse/PropousePresentation';
import SettingsPresentation from '../app/pages/Settings/SettingsPresentation';
import OrderHistoryPresentation from '../app/pages/Order-History/OrderHistoryPresentation';
import { Icon } from 'native-base';
import { Images } from '../app/images/Images';
import GlobalLayout from '../app/library/GlobalStyles/GlobalLayout';
import UserRegister from '../app/pages/User-Register/UserRegisterPresentation';
import PointsHistoryPresentation from '../app/pages/Points-History/PointsHistoryPresentation';
// import OrderPresentation from '../app/pages/Order/OrderPresentation';

//Gesture 

//Setting-Up Drawer Links
const DrawerStack = DrawerNavigator({
  UserHome: { screen: UserHome },
  ForgotPassword : { screen: ForgotPassword },
},
{
  gesturesEnabled: false,
  contentComponent: DrawerMenu,
})

//Setting-Up Drawer Default Style
const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#42C4D0'},
    gesturesEnabled: false,
    headerLeft: <Text  onPress={() => navigation.navigate('DrawerToggle')}>    <Icon  style={inStyle.white} name="md-menu"/>    </Text>,
  })
})

//Screens can be returned for ancestor
const LoginStack = StackNavigator({
  Login: { screen: Login },
}, {
  headerMode: 'float',
})

//Screen With Stack
RootStack = StackNavigator({
  LoginStack: {
    screen: LoginStack,
  },
  
  UserHome : {
    screen : UserHome
  },
  orderHistory: {
    screen: OrderHistoryPresentation,
    navigationOptions: {
      title: 'Order History',
    }
  },
  drawerStack: { 
    screen: DrawerNavigation 
  },
  userRegister: { 
    screen: UserRegister, 
    navigationOptions: ({navigation}) => ({
      title: 'User Register',
  })
},
  propouseFeed: {
    screen: PropouseFeed,
    navigationOptions: {
      title: 'All Propouse',
    }
  },
  propouse: {
    screen: Propouse,
    navigationOptions: {
      title: 'Propouse',
    }
  },
  about: {
    screen: About,
    navigationOptions: {
      title: '',
      headerTruncatedBackTitle: null, //tira o sepator do header

    }
  },
  pointsHistory: {
    screen: PointsHistoryPresentation,
    navigationOptions: {
      title: 'Points History',
    }
  },
  settings: {
    screen: SettingsPresentation,
    navigationOptions: {
      title: 'Settings',
    }
  },
  forgotPasswordScreen: { 
    screen: ForgotPassword, 
    navigationOptions: { 
      title: 'Forgot Password'} 
  },
},
{
  initialRouteName: 'LoginStack', 
  title: 'Main',
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#42C4D0',
      padding: '1%',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  })
});

const inStyle = {
  white: {
    color: 'white',
    fontWeight: 'bold'
  }
}

//Render your main Stack
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
