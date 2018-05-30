import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Button} from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView, Right, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Moment from 'moment';
import { Images } from '../../images/Images';

import GlobalLayout from '../../library/GlobalStyles/GlobalLayout';


export default class PointsHistoryPresentation extends Component {
  state = {
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
  }


    // componentDidMount(){
    //     var instance = axios.create({
    //         baseURL: 'http://tusk.poggers.com.br/tplink-1.6/',

    //         timeout: 1000,
    //         headers: {'X-Custom-Header': 'foobar', 'Authorization':token}
    //       });
          
    //      instance.get('http://tusk.poggers.com.br/tplink-1.6/api/order/history',{timeout: 3000})
    //      .then(response => this.setState({ pointsHistory: response.data }));
    // }
    
    render() {
        return(
            <View style={styles.iboxcontent}> 
            <View style={ styles.separator}>
              <Button style={{backgroundColor: '#FFC306',height:80,margin:'2%', marginBottom:'6%'}} block >
                  <View style={{alignItems:'center'}}>
                  <Text style={{color:'white', fontWeight: 'bold',fontSize:16}}>NO TRANFERY</Text>
                  <Text style={{color:'white', fontWeight:'300',fontSize:14}}>Points are still in your account</Text>
                  </View>
              </Button>
            </View>
            <View style={ styles.separator}>
            <View style={ styles.margin}>
            <View style={styles.container}>
                <Text style={styles.colorGray}>
                <Text style={styles.pink}>Points <Text style={{fontWeight:'100', color:'#b81a5b', fontSize:20, marginRight:'2%'}}>i have</Text></Text>
                </Text>
                <Text style={styles.pink}>1000 <Text style={{fontWeight:'100', color:'#b81a5b', fontSize:20, marginRight:'2%'}}>pts</Text></Text>
            </View>
            </View>
            </View>
            <View style={ styles.separatorGray}>
            <View style={{marginLeft:'2%',marginRight:'2%',marginTop:'4%', marginBottom:'4%'}}>
            <View style={styles.alignCenter}>
            <Text style={{fontWeight:'bold'}}>2016</Text>
            <Image source={Images.chevronDown} style={{width:10,height:10}}/>
            </View>
            <View  style={styles.container}>
                  <Text style={styles.bold}>Receive  </Text>
                  <Text style={styles.normal}>MAR 18</Text>
                  <Text style={styles.bold}>+150 pts</Text>
                  </View>
              </View>
            </View>
            <View style={ styles.separatorGray}>
            <View style={ styles.margin}>
            <View  style={styles.container}>
                  <Text style={styles.bold}>Tranferred</Text>
                  <Text style={styles.normal}>FEB 10</Text>
                  <Text style={styles.bold}>    - 45 pts</Text>
                  </View>
            <View style={styles.alignCenter}>
            <Text style={{fontWeight:'bold',marginTop:'8%'}}>2017</Text>
            <Image source={Images.chevronDown} style={{width:10,height:10,marginBottom:'4%'}}/>
            </View>
          <View style={{marginBottom:'2%'}}>
            <View  style={styles.container}>
                  <Text style={styles.bold}>Receive</Text>
                  <Text style={styles.normal}> DEZ 01</Text>
                  <Text style={styles.bold}>+ 87 pts</Text>
                  </View>
                  </View>
                  </View>
              </View>
            <View style={ styles.separatorGray}>
            <View style={{marginLeft:'2%',marginRight:'2%',marginTop:'2%', marginBottom:'4%'}}>
            <View  style={styles.container}>
                  <Text style={styles.bold}> Tranferred</Text>
                  <Text style={styles.normal}>Nov 20</Text>
                  <Text style={styles.bold}>  - 180 pts</Text>
                  </View>
              </View>
            </View>
            <View style={ styles.separatorGray}>
            <View style={{marginLeft:'2%',marginRight:'2%',marginTop:'2%', marginBottom:'4%'}}>
            <View  style={styles.container}>
                  <Text style={styles.bold}> Tranferred</Text>
                  <Text style={styles.normal}>Nov 30</Text>
                  <Text style={styles.bold}>   - 30 pts</Text>
                  </View>
              </View>
            </View>
            </View>
            )}
}

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: '100%',
        flex: 1
      }, 
    imgSquare: {
        height: 75,
        width: 75
      },
    pink:{ 
        color: '#b81a5b',
        fontWeight: 'bold',
        fontSize:20,
        marginTop:'4%',
        marginLeft:'2%',
        marginBottom:'4%'
      },
    iboxcontent:{
        backgroundColor:'white',
        width: '100%',
        height: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      paddingAdjust:{
        paddingRight: "1%",
      },
    itemBordered:{
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#D9DDDF',
        alignItems: 'center',
      },   
    colorGray: {
        fontSize: 16,
        color:'gray',
        fontWeight: '200'
      },
    text:{
        color:'black',
        fontWeight: 'bold',
        fontSize:12,
        marginTop: '5%'
    },
    separator: {
      borderBottomColor: "#FFC306",
      borderBottomWidth: 1
    },  
    separatorGray: {
        borderBottomColor: "#D9DDDF",
        borderBottomWidth: 1
      },     
      margin:{
        margin:'2%'
      },
      alignCenter:{
          alignItems:'center'
      },
      bold:{ 
        color: 'black',
        fontWeight: 'bold',
        fontSize:14,
        marginTop: '4%'
      },
    normal:{ 
        color: 'black',
        fontWeight: '200',
        fontSize:14,
        marginTop: '4%'
      },
      itemBordered:{
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#D9DDDF',
        alignItems: 'center',
      },   
    
  });