//Externals
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, input, ScrollView, TouchableHighlight, Image, RefreshControl } from 'react-native';
import { Container, Card, CardItem, Body, StyleProvider, Header, Content, Form, Item, Input, Icon, Grid, Col, Label, Footer, Button } from 'native-base';
import axios from 'axios';
import Moment from 'moment';

//Styles
import globalLayout from '../../library/GlobalStyles/GlobalLayout';
import Colors from '../../library/GlobalStyles/GlobalLayout';

//Components 
import NewsCard from '../../components/NewsCard';
import LevelCard from '../../components/LevelCard';
import UserStyles from './UserStyles';
import { AsyncStorage } from 'react-native';

var homeObj = [];
//Don't comment in JSX
export default class UserHomePresentation extends Component{
  state = { 
    propouses: [],
    refreshing: false,
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
  };


  async _onRefresh() {
    this.setState({refreshing: true});
    this.componentDidMount()
    console.log(this.state)
    this.setState({refreshing: false});
  }

  render() {

    console.log(this.state)

    return (
      <View style={UserStyles.iboxContent}>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />
      }
      >
            <View style={UserStyles.container}>
              <Text style={UserStyles.titles}>Notificacoes</Text>
                <Button medium transparent warning style={styles.paddingAdjust}
                        onPress={() =>  this.props.navigation.navigate('newsFeed')}>
                    <Icon style={{marginRight:'1%'}} name="md-add" />
                </Button>
            </View> 
            <ScrollView>
            <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                  fulano se candidatou na sua proposta             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                fulano se candidatou na sua proposta             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                fulano se candidatou na sua proposta             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
          
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                  Corrida iniciada             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                  Corrida finalizada             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                Corrida finalizada             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                Corrida finalizada             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                Corrida finalizada             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
        <ScrollView styles={{width: 50}}>
          <View style={styles.itemBordered}>
            <CardItem >
              <Body  style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                Corrida finalizada             
                </Text> 
                </Body>         
                <Body  style={styles.container}>
                <Text style={styles.subtitle}>
                xx/xx/xx
                </Text>                        
              </Body>                  
            </CardItem>
          </View> 
        </ScrollView> 
      </TouchableHighlight>
            </ScrollView>   
        <View >          
        </View>
      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  defaultSpace: {
    padding: 10,
  },
  img: {
      height: 80,
      width: 80,  
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paddingAdjust:{
    paddingRight: "1%"
  },  
  itemBordered:{
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D9DDDF',
    alignItems: 'center',
  },  
 title:{
   color: 'gray',
   fontSize: 14,
   width: '180%', 
 },
 titlePopular:{
  color: 'gray',
  fontSize: 14,
  textAlign:'center'
  
},
 subtitle:{
  color: 'gray',
  fontSize: 12,
  fontWeight: 'bold',
  marginLeft: '59%',
 },
 colorGray: {
  fontSize: 14,
  color:'gray',
},
 });
