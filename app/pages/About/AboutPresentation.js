import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, input, Image } from 'react-native';
import { Container, StyleProvider, Header, Content, Form, Item, Input, Grid, Col, Label, Footer, Button } from 'native-base';
import { Images } from '../../images/Images';


export default class AboutPresentation extends Component {
  state = {
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
    OrientationStatus : 'Portrait Mode'
  }
  render() {
    // const requestInfo = {
    //   method: 'GET',
    //   headers: new Headers({
    //     'Authorization':token,
    //   })
    // }
  
    // fetch('http://url-about', requestInfo)
    //   .then(response => response.json())
    //   .then(response =>{ 
    //     aboutapp = response;
    //     console.warn(aboutapp);
    //   })

    return (
      <View style={styles.iboxcontent}>  
      <Container style={styles.social}>
      <View style={styles.containerLogo}>
          <Image source={Images.logoTP} style={styles.logo} resizeMode="contain"/>
          <Text style={styles.text}>App  name - Version 1.0.1</Text>
          <Text style={styles.textTel}>(11) xxxx-xxxx</Text>
          <Text style={styles.contact}>contact@email.com</Text>
      </View>     
      </Container>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    iboxcontent:{
        backgroundColor: '#42C4D0',
        width: '100%',
        height: '100%'
    },
    social: {
      paddingTop: '8%',
      maxHeight: 140,
    },
    loginInput: {
      paddingBottom: '5%',
      paddingTop:'15%'
    },
    logo: {
      marginTop: '90%',
      height: 100,
      width: 300
    },
    containerLogo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10%'
    },
    text:{
      fontSize: 23,
      color: 'white',
      marginTop: '10%',
    },
    textTel:{
      fontSize: 20,
      color: 'white',
      marginTop: '20%',
    },
    contact:{
      fontSize: 20,
      color: 'white',
      marginTop: '3%',
    }

})