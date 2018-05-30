import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Button} from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView, Right, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Moment from 'moment';

export default class OrderHistoryPresentation extends Component {

    state = {
        orderHistory:[],
        currentOrientation: '',
        orientationDegress: 0,
        isLandscape: false,
    }
    

  render() {

        return (
            <View style={styles.iboxcontent}> 
                <ScrollView>
                    <View>
                        <View>
                        <ScrollView>
                            <View style={styles.itemBordered}>
                            <CardItem>
                                <Body >
                                    <View width={'100%'} style={styles.containerCard}>
                                        <View style={styles.container}>
                                            <Text style={styles.colorGray}>
                                            'DD/MM/YYYY'
                                            </Text>
                                            <Text style={styles.pink}>xxxxxxxx</Text>
                                        </View>
                                        <View  style={styles.container}>

                                            <Text style={styles.text}> Status (OK/Inprogress/fail)</Text>
                                            <Text style={styles.text}>Total: R$ </Text>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body >
                                    <View width={'100%'} style={styles.containerCard}>
                                        <View style={styles.container}>
                                            <Text style={styles.colorGray}>
                                            'DD/MM/YYYY'
                                            </Text>
                                            <Text style={styles.pink}>xxxxxxxx</Text>
                                        </View>
                                        <View  style={styles.container}>

                                            <Text style={styles.text}> Status (OK/Inprogress/fail)</Text>
                                            <Text style={styles.text}>Total: R$ </Text>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body >
                                    <View width={'100%'} style={styles.containerCard}>
                                        <View style={styles.container}>
                                            <Text style={styles.colorGray}>
                                            'DD/MM/YYYY'
                                            </Text>
                                            <Text style={styles.pink}>xxxxxxxx</Text>
                                        </View>
                                        <View  style={styles.container}>

                                            <Text style={styles.text}> Status (OK/Inprogress/fail)</Text>
                                            <Text style={styles.text}>Total: R$ </Text>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body >
                                    <View width={'100%'} style={styles.containerCard}>
                                        <View style={styles.container}>
                                            <Text style={styles.colorGray}>
                                            'DD/MM/YYYY'
                                            </Text>
                                            <Text style={styles.pink}>xxxxxxxx</Text>
                                        </View>
                                        <View  style={styles.container}>

                                            <Text style={styles.text}> Status (OK/Inprogress/fail)</Text>
                                            <Text style={styles.text}>Total: R$ </Text>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                            </View>               
                        </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    pink:{ 
        color: '#b81a5b',
        fontWeight: 'bold',
        fontSize:10
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
    }
  });