/**
 * Login Screen
 * @author: Diogo Casagrande
 */

//External Components 
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, input, Image, Alert } from 'react-native';
import { Container, StyleProvider, Header, Content, Form, Item, Input, Grid, Col, Label, Footer, Button} from 'native-base';
// import { StackNavigator } from 'react-navigation';

//Domain Components
import { Images } from '../../images/Images';

//Stylesheets
import Colors from '../../library/GlobalStyles/Colors';
import GlobalLayout from '../../library/GlobalStyles/GlobalLayout';
import LoginStyle from './LoginStyle'
import { AsyncStorage } from 'react-native';
import { TextInput } from 'react-native';



export default class LoginPresentation extends Component {
  state={
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
}
  //Navigation option to hide top bar
  static navigationOptions = {
    header: null,
  };

  /** 
   * @name: Login
   * @description: This call contact the Webservice and save main informations of user (Token and username)
   * @param: This don't need parameters
   * @observation: this function need stay here, put it on LoginContainer make the job more complex and slowly.
   */
   //Functions and Calls
  login(){
    try{
      const requestInfo = {
        method: 'POST',
        body: JSON.stringify({
          login: this.state.user,
          password: this.state.password
        }),
        headers: new Headers({
          'Content-type': 'application/json',
        })
      }
      fetch('http://127.0.0.1:8080/api/v1/companies/auth', requestInfo)
      .then(response => {
          if(response.ok){
              token = response.headers.get('Access-Token');
              AsyncStorage.setItem('token:key', token);
              AsyncStorage.getItem('token:key').then(tokenKey => console.warn(tokenKey));
              this.props.navigation.navigate('drawerStack');              
          }else{
            Alert.alert('Incorrect user or password. Please try again.');
          }
      }).catch(error => {
        console.warn(error)
      }); 
    }catch(Exception ){
      Alert.alert('Incorrect user or password. Please try again.');
    }
  }

  //Rendered Elements
  render() {
    return (
      
      <View style={GlobalLayout.container}>
        <Container style={inStyle.social}>
          <View style={LoginStyle.containerLogo}>
          <Text>***MAKE YOUR FRETE LOGO HERE (Customer)***</Text>
              {/* <Image source={Images.logo} style={LoginStyle.logo} resizeMode="contain"/> */}
          </View>     
        </Container>

        <Container style={inStyle.loginInput}>
          {/* <Content >        */}
            <Form style={GlobalLayout.boxFixer}>              
              <Item floatingLabel>
                <Label style={inStyle.white}>Login</Label>
                <Input style={Colors.white} onChangeText = {text => this.setState({user: text})}/>
              </Item>    
              <Item floatingLabel>
                <Label style={inStyle.white}>Password</Label>
                <Input style={Colors.white} onChangeText = {text => this.setState({password: text})} secureTextEntry autoCapitalize="none" />
              </Item>             
            </Form>
            <Grid>
              <Col style={GlobalLayout.marginDefault}>
                <Button block transparent onPress={() => this.props.navigation.navigate('forgotPasswordScreen')}>
                  <Text style={{color:'white', fontWeight: 'bold'}}>Forgot Password?</Text>
                </Button>
              </Col>
              <Col style={GlobalLayout.marginDefault}>
                <Button style={GlobalLayout.alertButton} block onPress={this.login.bind(this)} >
                  <Text style={{color:'white', fontWeight: 'bold'}}>Send</Text>
                </Button>
              </Col>
            </Grid>
          {/* </Content> */}

  
        </Container>

        <Container >
            {/* <View>
              <Button style={LoginStyle.facebookButton} small block>
                <Text style={Colors.white}>Login with Facebook</Text>
              </Button>
            </View>
            <View>
              <Button style={LoginStyle.gmailButton} small block>
                <Text style={Colors.white}>Login with Gmail</Text>
              </Button>
            </View> */}
            <View style={LoginStyle.newUser}>
              <Text style={Colors.littleBlue}> DONT'T HAVE ACCOUNT?</Text>
              <Button block transparent onPress={()=> this.props.navigation.navigate('userRegister')}>
                <Text style={Colors.white} style={{color:'white',fontWeight:'bold'}}>SIGN UP</Text>
              </Button>
            </View>
        </Container>

      </View>

    );
  }
}

//In class Style
const inStyle = {
  white: {
    color:  '#FFFFFF',
  },
  social: {
    paddingTop: '8%',
    maxHeight: 140,
  },
  loginInput: {
    paddingBottom: '5%',
    paddingTop:'15%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop:'20%',
    backgroundColor: '#42C4D0',
  },
  footer: {
    padding: '5%',
    borderColor: '#D9DDDF',
    borderTopWidth: 0.5,
}, 
}

