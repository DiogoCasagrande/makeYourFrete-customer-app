import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Button } from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView, Right, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Moment from 'moment';


export default class PropouseFeedPresentation extends Component {
    
    state = {
        news:[],
        currentOrientation: '',
        orientationDegress: 0,
        isLandscape: false,
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
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
                        </CardItem>  
                    </View>
                </ScrollView>                        
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'none'} onPress={() =>  this.props.navigation.navigate('propouse')}>
                    <ScrollView>
                        
                        <View style={styles.itemBordered}>
                        <CardItem>
                            <Body  style={styles.container}>
                                <Text style={styles.colorGray} numberOfLines={1}>
                                   Propose Title
                                </Text> 
                             </Body>   
                             <Body  style={styles.container}>
                                <Text style={styles.subtitle}>
                                    XX/XX/XXXX
                                </Text>                                   
                            </Body>                  
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
      iboxcontent:{
        backgroundColor:'white',
        width: '100%',
        height: '100%'
    },
    colorGray: {
        fontSize: 14,
        color:'gray',
      },
      subtitle:{
        color: 'gray',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: '59%',
       }
       });
      