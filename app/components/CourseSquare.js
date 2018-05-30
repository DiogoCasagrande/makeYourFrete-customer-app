import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, input, ScrollView, Image } from 'react-native';
import { Container, StyleProvider, Header, Content, Form, Item, Input, Grid, Col, Label, Footer, Button } from 'native-base';
import globalLayout from '../library/GlobalStyles/GlobalLayout';


export default  class CourseSquare extends React.Component{
    
    render() {
        return (
            <View style={styles.defaultSpace}>
                <Image style={styles.img} source={{uri: 'https://cdn-reichelt.de/bilder/web/xxl_ws/E910/TPLINK_TLMR3420_01.png'}}/>
                <Text style={styles.colorGray}>Grade Name</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    defaultSpace: {
      padding: 10,
    },
    img: {
        height: 100,
        width: 100,        
    },
    colorGray: {
        fontSize: 14,
        color:'gray',
        textAlign: 'center',
        marginTop: '14%'
      },     
  });
