import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon } from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView, Image } from 'react-native';

import axios from 'axios';
import Moment from 'moment';

export default class Comments extends Component {


  state = {
    name:[],
  }

  constructor(props){
    super(props)
  }

  componentDidMount(){
  
    // const { params } = this.props.navigation.state;
    // const idTraining = params ? params.idTraining : null;

    // console.log(idTraining);

    var instance = axios.create({
      baseURL: 'http://tusk.poggers.com.br/tplink-1.6/api/',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar', 'Authorization':token}
    });

    instance.get('http://tusk.poggers.com.br/tplink-1.6/api/auth/info',{timeout: 3000})
       .then(response => this.setState({ name: response.data.name }));
  
    }
  
    renderFeedback(){

    }

    render() {

    Moment.locale('pt-br')

    return (
      <View style={styles.separator}>
         <View style={styles.container}>
            <View style={styles.titleAdjust}>
                <Icon style={styles.textCorrect} note name="md-checkmark-circle-outline" />
                {/* <Text>{this.state.name}</Text> */}
            </View>
            <Text style={styles.textCorrect} note>  { Moment(Date.now()).format('DD/MM/YYYY')}</Text>
         </View>
         <View>
            <Text style={styles.textCorrect}>User  Etiam non quam metus. Sed urna lacus, scelerisque a blandit eget, tempus ac nunc. 
            Donec quis est mollis, fringilla nunc et, sagittis purus.</Text>
         </View>
         <View>
            <Text style={styles.adminStyle}>Admin Answer</Text>
            <Text style={styles.textCorrect}>Admin Etiam non quam metus. Sed urna lacus, scelerisque a blandit eget, tempus ac nunc. 
            Donec quis est mollis, fringilla nunc et, sagittis purus.</Text>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    img: {
      height: 100,
      width: 100,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleAdjust: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCorrect: {
      padding: '2%',
    },
    adminStyle: {
        padding: '2%',
        color: 'red',
    },
    separator: {
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
      },
  });