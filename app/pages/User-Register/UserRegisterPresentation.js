//External Components  

import React, { Component } from 'react'; 
//import propTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, input, ScrollView,  AppRegistry, Image, Picker, Button, Alert } from 'react-native'; 
import { Container, Card, CardItem, Body, StyleProvider, Header, Content, Form, Item, Input, Icon, Grid, Col, Label, Footer, List, ListItem} from 'native-base'; 
import DropDown, {Select, Option} from 'react-native-chooser';
import Keyboard from 'react-native-keyboard';
import axios from 'axios';

import LevelCard from '../../components/LevelCard';
import Comments from '../../components/Comments';


//Domain Components 

//Stylesheets 

import Colors from '../../library/GlobalStyles/Colors'; 
import GlobalLayout from '../../library/GlobalStyles/GlobalLayout'; 
import Login from '../../pages/Login/LoginStyle'; 
import Styles from '../../pages/User-Register/Styles'; 

// import { Dropdown } from 'react-native-material-dropdown';
// https://www.npmjs.com/package/react-native-material-dropdown


export default class UserRegisterPresentation extends Component { 

  static navigationOptions= ({
    headerRight: 
    <Text onPress={() => this.send()}>
      <Icon  style={{color:'#FFFFFF', marginLeft:'95%'}} name="paper-plane"/>  
    </Text>,
  })
  
  state = {
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
 
    name:"",
    cnpj:"",
    opening:"",
    telephone:"",
    password:"",
    email:"",
    postcode: "",
    number: "",
    complement: ""
  }


onTextChanged(text) {
  this.setState({myNumber: text})
}
onSelect(value, label) {
    this.setState({value : value})
  }

  constructor(props) {
    super(props);
  }

  send(){
    try{
      const requestInfo = {
        method: 'POST',
        body: JSON.stringify({
          data:{
          name:this.state.name,
          cnpj:this.state.cnpj,
          opening:this.state.opening,
          telephone:this.state.telephone,
          password:this.state.password,
          email:this.state.email,
          address:{
            postcode: this.state.postcode,
            number: this.state.number,
            complement: this.state.complement
          }}
        }),

        headers: new Headers({
          'Content-type': 'application/json',
        })
      }
      fetch('http://127.0.0.1:8080/api/v1/companies', requestInfo)
      .then(response => {
          if(response.ok){
              Alert.alert("user created successfully")
              this.props.navigation.navigate('Login');              
          }else{
            console.log(response)
            Alert.alert('some data was entered incorrectly. Please try again.');
          }
      }).catch(error => {
        console.warn(error)
      }); 
    }catch(Exception ){
      Alert.alert('some data was entered incorrectly. Please try again.');
    }
  }

  render() { 

  return ( 

    <View style={Styles.container}> 
      <Container style={inStyle.loginInput}> 
        <Content >        
          <Form style={Styles.boxFixer}>  
            <Text style={inStyle.pink}>Personal</Text>
            <Item floatingLabel> 
              <Label style={inStyle.gray}>Name*</Label> 
              <Input type='Text' style={{color: 'a6a6a6'}} onChangeText = {text => this.setState({name: text})}/> 
            </Item>  
            <Item floatingLabel> 
              <Label style={inStyle.gray}>CNPJ*</Label> 
              <Input keyboardType={'numeric'} style={{color: 'a6a6a6'}} placeholderTextColor="#gray" onChangeText = {text => this.setState({cnpj: text})}/> 
            </Item> 
            <Item floatingLabel> 
              <Label style={inStyle.gray}>Opening*</Label> 
            <Input type='Date' style={{color: 'a6a6a6'}} onChangeText = {text => this.setState({opening: text})}/> 
            </Item>  
            <Item floatingLabel> 
              <Label style={inStyle.gray}>Contact number*</Label> 
              <Input type='number'style={{color: 'a6a6a6'}} onChangeText = {text => this.setState({telephone: text})}/> 
            </Item>  
            <Item floatingLabel> 
              <Label style={inStyle.gray}>Password*</Label> 
              <Input type='Password' style={{color: 'a6a6a6'}} secureTextEntry placeholderTextColor="#gray" onChangeText = {text => this.setState({password: text})}/>  
            </Item>  
            <Item floatingLabel> 
              <Label style={inStyle.gray}>Confirm Password*</Label> 
              <Input type='Password' style={{color: 'a6a6a6'}} secureTextEntry placeholderTextColor="gray" onChangeText = {text => this.setState({confirmPassword: text})}/>  
            </Item>  
            <Item floatingLabel> 
              <Label style={inStyle.gray}>email*</Label> 
              <Input keyboardType={'numeric'} style={{color: 'a6a6a6'}} placeholderTextColor="#gray" onChangeText = {text => this.setState({email: text})}/> 
            </Item> 
            <Item floatingLabel> 
              <Label style={inStyle.gray}>postcode*</Label> 
              <Input keyboardType={'numeric'} style={{color: 'a6a6a6'}} placeholderTextColor="#gray" onChangeText = {text => this.setState({postcode: text})}/> 
            </Item> 
            <Item floatingLabel> 
              <Label style={inStyle.gray}>number*</Label> 
              <Input keyboardType={'numeric'} style={{color: 'a6a6a6'}} placeholderTextColor="#gray" onChangeText = {text => this.setState({number: text})}/> 
            </Item>  
            <Item floatingLabel> 
              <Label style={inStyle.gray}>complement*</Label> 
              <Input keyboardType={'numeric'} style={{color: 'a6a6a6'}} placeholderTextColor="#gray" onChangeText = {text => this.setState({complement: text})}/> 
            </Item> 
            <View>       

            {Platform.OS === 'ios' ?
            <View style={{backgroundColor:'#FDC306',borderRadius:5, marginLeft:'5%'}}>
            <Button style={styles.buttonStyle}
              onPress={() => this.send()}
              title="Confirm Register"
              color="white"   
              fontWeight="bold"           
              accessibilityLabel="Confirm Register"
            /></View>
            :
            <View style={{backgroundColor:'#FDC306',borderRadius:5, marginLeft:'5%'}}>
            <Button style={styles.buttonStyle}
              onPress={() => this.send()}
              title="Confirm Register"
              color="#FDC306"   
              fontWeight="bold"
              accessibilityLabel="Confirm Register"
            />
            </View>
            }  
          
            </View> 
          </Form> 

      </Content> 

    </Container> 
  </View> 

  ); 
  } 

} 

const styles = StyleSheet.create({ 
container: { 
flex: 1, 
justifyContent: 'center', 
alignItems: 'center', 
backgroundColor: '#FFC306', 
}, 
footer: {
  padding: '4%',       
}, 
buttonStyle: {
  marginTop: '5%',
  color:  '#FFFFFF',
  backgroundColor: '#FDC306',
  height: 40
},
containerSend: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#42C4D0',
},

footer: {
  padding: '4%', 
  backgroundColor:'gray'      
}, 
welcome: { 
fontSize: 20, 
textAlign: 'center', 
margin: 10, 
}, 
backDescription: {          
  width: '80%',
  display: 'flex',
  alignItems: 'flex-end', 
  paddingRight: '5%',
},
white: {
  color: 'white',
  fontWeight: 'bold'
},
sendColor: {
  backgroundColor: '#42C4D0',
  width: '20%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
},
instructions: { 
textAlign: 'center', 
color: '#333333', 
marginBottom: 5, 
}, 

}); 

const inStyle = {  
white: {  
color: 'gray',  
},  

pink: {  
color: '#b81a5b',
paddingTop: '5%',
paddingLeft: '4%',
fontWeight: 'bold',
},  
gray: {
  color:  'gray',
},
social: {  
paddingTop: '10%',  
maxHeight: 50,  
},  

loginInput: {  
paddingBottom: '5%',  
}  

}  

 