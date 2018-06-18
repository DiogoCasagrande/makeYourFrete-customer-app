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
    propouse:[],
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
  }

  renderPropouses(){

    // return this.state.propouse.map(
    //   propouse =>  
        // <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse',{idPropouse:propouse.idPropouse, propouseTitle:propouse})}>
        //         <ScrollView>
        //             <View style={styles.itemBordered}>
        //                 <CardItem>
        //                     <View>
        //                         <Body>
        //                             <View>
        //                                 <Text style={styles.date}>
        //                                     { Moment(propouse.updateAt).format('YYYY/MM/DD')} {`\n`}
        //                                 </Text> 
        //                                 <Text style={styles.title}  numberOfLines={3}>
        //                                     {propouse.title}  
        //                                 </Text>                                        
        //                             </View>                
        //                         </Body>                             
        //                     </View>                                           
        //                 </CardItem>            
        //             </View> 
        //         </ScrollView>                     
        // </TouchableHighlight>
    //)
}

  render() {

    console.log(this.state.news)

    return (
        <View style={styles.iboxcontent}>
        <ScrollView>
            <View >
              <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                  <ScrollView>
                      <View style={styles.itemBordered}>
                          <CardItem>
                              <View>
                                  <Body>
                                      <View>
                                          <Text style={styles.date}>
                                              'YYYY/MM/DD'
                                          </Text> 
                                          <Text style={styles.title}  numberOfLines={3}>
                                              Propouse title  
                                          </Text>                                        
                                      </View>                
                                  </Body>                             
                              </View>                                           
                          </CardItem>            
                      </View> 
                  </ScrollView>                     
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                  <ScrollView>
                      <View style={styles.itemBordered}>
                          <CardItem>
                              <View>
                                  <Body>
                                      <View>
                                          <Text style={styles.date}>
                                          'YYYY/MM/DD'
                                          </Text> 
                                          <Text style={styles.title}  numberOfLines={3}>
                                              Propouse title  
                                          </Text>                                        
                                      </View>                
                                  </Body>                             
                              </View>                                           
                          </CardItem>            
                      </View> 
                  </ScrollView>                     
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                  <ScrollView>
                      <View style={styles.itemBordered}>
                          <CardItem>
                              <View>
                                  <Body>
                                      <View>
                                          <Text style={styles.date}>
                                          'YYYY/MM/DD'
                                          </Text> 
                                          <Text style={styles.title}  numberOfLines={3}>
                                              Propouse title  
                                          </Text>                                        
                                      </View>                
                                  </Body>                             
                              </View>                                           
                          </CardItem>            
                      </View> 
                  </ScrollView>                     
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                  <ScrollView>
                      <View style={styles.itemBordered}>
                          <CardItem>
                              <View>
                                  <Body>
                                      <View>
                                          <Text style={styles.date}>
                                          'YYYY/MM/DD'
                                          </Text> 
                                          <Text style={styles.title}  numberOfLines={3}>
                                              Propouse title  
                                          </Text>                                        
                                      </View>                
                                  </Body>                             
                              </View>                                           
                          </CardItem>            
                      </View> 
                  </ScrollView>                     
          </TouchableHighlight>
          </View>
        </ScrollView>
        </View>
    );
  }
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