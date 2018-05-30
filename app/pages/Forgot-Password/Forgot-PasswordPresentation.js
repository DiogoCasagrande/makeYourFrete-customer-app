import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, input, Alert } from 'react-native';
import { Container, StyleProvider, Header, Content, Form, Item, Input, Grid, Col, Label, Footer, Button, Body } from 'native-base';
import GlobalLayout from '../../library/GlobalStyles/GlobalLayout';
import Colors from '../../library/GlobalStyles/GlobalLayout';
import axios from 'axios';

export default class ForgotPasswordPresentation extends Component{

  state = {
    email:"email",
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
  }
  
  async recover(){

      // const requestInfo = {
      //   method: 'POST',
      //     body: JSON.stringify({
      //       email:this.state.email,
      //     }),
      //     headers: new Headers({
      //       'Content-type': 'application/json',
      //     })
      // }
      // await fetch('http://url-forgot', requestInfo, {timeout: 3000})
      //     .then(response => response.json())
      //     .then(response =>{ 
      //       if(response.ok){
      //         console.log("fuck this shit")
      //         resp = response;
      //         Alert.alert('New password sent to email!');
      //       }
      //       else{
      //         Alert.alert('invalid email')
      //       }
      // })
  }


  render() {

    return (
        <View style={inStyle.iboxcontent}>
            <Text style={inStyle.pink}> Complete the field to recover your password </Text>
            
            <Form style={GlobalLayout.boxFixer}>              
              <Item floatingLabel>
                <Label style={{color:'gray'}} >E-mail</Label>
                <Input onChangeText = {text => this.setState({email: text})} />
              </Item>             
            </Form>

            <Grid >
              <Col>
              </Col>
              <Col style={GlobalLayout.marginDefault}>

                <Button style={inStyle.btnSend} block onPress={this.recover.bind(this)}>
                  <Text style={inStyle.white} >Send</Text>
                </Button>
              </Col>
            </Grid>

        </View>
    );
  }
}

const inStyle = {
  white: {
    color:  '#FFFFFF',
    fontWeight: 'bold',
  },
  pink: {  
    textAlign: 'center',
    marginTop: '6%',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#b81a5b'
  }, 
  btnSend:{
    backgroundColor: '#FFC306',
    height: 40,
  },
  iboxcontent:{
    backgroundColor:'white',
    width: '100%',
    height: '100%'
}
}