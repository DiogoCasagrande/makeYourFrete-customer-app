//Default Import
import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, input, TouchableHighlight,Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container, Left, Right, Grid, Col,Input, Label, Item, Row } from 'native-base';
import { AsyncStorage } from 'react-native';

import axios from 'axios';

//Assets
import colors from '../../library/GlobalStyles/Colors';
import { Images } from '../../images/Images';
import { Icon } from 'native-base';
import UserHomePresentation from '../User-Home/UserHomePresentation';

import GlobalLayout from '../../library/GlobalStyles/GlobalLayout'; 
import Login from '../../pages/Login/LoginStyle'; 
import Styles from '../../pages/User-Register/Styles'; 

import { Dropdown } from 'react-native-material-dropdown';
export default class DrawerPresentation extends React.Component {
  
  state ={
    distributorPermission:"",
    name:"",
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
  }

  logout = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'LoginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  distributors(){
    console.log(this.state.distributorPermission)
    if(this.state.distributorPermission == 200){
    this.props.navigation.navigate('distributor')
    }else{
      Alert.alert('without permission to generate order!!!');
    }
  }

  render() {
    const { navigation } = this.props
    console.log();

    return (
      <ScrollView style={styles.container}>

            <Grid style={styles.userInfo}>
            
              <Col> 
              </Col>
              <Col style={{width:100, marginRight:'20%'}}>
                <Text style={styles.title}>USER NAME HERE***</Text>
              </Col>
              <Col>
              <Image source={Images.edit} style={{marginLeft:"95%", marginBottom: "130%", width:17, height:17}}/>
              </Col>
            
            </Grid>

            <View style={styles.itemBordered}>
            <Image source={Images.news} style={styles.icon}/>
              <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouseFeed')}>
                <Text style={styles.uglyDrawerItem}>Notificaçoes</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.itemNonBordered}>
            <Image source={Images.time} style={styles.icon}/>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('orderHistory')}>
                  <Text style={styles.uglyDrawerItem}>Historico</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.itemBordered}>
            <Image source={Images.time} style={styles.icon} />
            <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('')}>
              <Text style={styles.uglyDrawerItem}>Perfil</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.itemBordered}>
            <Image source={Images.time} style={styles.icon} />
            <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('pointsHistory')}>
              <Text style={styles.uglyDrawerItem}>Propostas</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.itemNonBordered}>
            <Image source={Images.settings} style={styles.icon}/>
              <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('settings')}>
                <Text style={styles.uglyDrawerItem}>Settings</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.itemNonBordered}>
            <Image source={Images.about} style={styles.icon}/>
            <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('about')}>
              <Text style={styles.uglyDrawerItem}>About</Text>
            </TouchableHighlight>
            </View>

            <View style={styles.itemNonBordered}>
            <Image source={Images.power} style={styles.icon}/>
              <Text onPress={this.logout} style={styles.uglyDrawerItem}>Log Out</Text>
            </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  uglyDrawerItem: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 13,
    margin: 5,
    color:'gray',
  },
  userInfo: {
    backgroundColor: "#FFC306",
    maxHeight: "25%",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop:"1%",
  }, 
  iconEdit: {
    width: 10,
    height: 10,
    marginRight:"1%",
    marginTop: '1%'
    
  }, 
  menu: {
    flex: 1,
    flexDirection: 'row',
  }, 
  userImage: {
    width: 29,
    height: 36,
    marginRight: "99%"

  },
  title: {
    fontSize: 14,
    color: 'white',
    width: '200%'
  },
  subtitle: {
    fontSize: 11,
    color: 'white',
    fontWeight: '900',
  },
  itemBordered:{
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D9DDDF',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  itemNonBordered: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  paddingAdjust:{
    paddingRight:'1%',
  }
})