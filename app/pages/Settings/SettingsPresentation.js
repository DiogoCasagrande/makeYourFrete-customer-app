import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Button} from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView, Right, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SettingsPresentation extends Component {
  state = {
    currentOrientation: '',
    orientationDegress: 0,
    isLandscape: false,
  }

  render() {
        return (
          <View style={styles.iboxcontent}>
          <ScrollView>
              <View style={styles.itemBordered}>
                <CardItem >
                  <Body  style={styles.container}>
                    <Text style={styles.colorGray}>
                    Languages 
                    </Text>
                    <Button small transparent warning 
                            style={styles.paddingAdjust}>
                        <Icon name="arrow-forward" />
                    </Button>
                  </Body>                  
                </CardItem>  
                </View>
                <View style={styles.itemBordered}>
                <CardItem >
                  <Body  style={styles.container}>
                    <Text style={styles.colorGray}>
                    Terms of User
                    </Text>
                    <Button small transparent warning 
                            style={styles.paddingAdjust}>
                        <Icon name="arrow-forward" />
                    </Button>
                  </Body>                  
                </CardItem>  
                </View>
                <View style={styles.itemBordered}>
                <CardItem >
                  <Body  style={styles.container}>
                    <Text style={styles.colorGray}>
                    Policy
                    </Text>
                    <Button small transparent warning 
                            style={styles.paddingAdjust}>
                        <Icon name="arrow-forward" />
                    </Button>
                  </Body>                  
                </CardItem>  
                </View>
            </ScrollView>
            </View>


        )
    }
}

const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
},
      containerCard: {
        display: 'flex',
      },
      paddingAdjust:{
        paddingRight: "1%",
      },
      img: {
        height: 200,
        width: '100%',
        flex: 1
      }, 
      imgSquare: {
        height: 75,
        width: 75
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
      
      
  });