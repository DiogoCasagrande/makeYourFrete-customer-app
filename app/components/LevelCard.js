import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Button } from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LevelCard extends Component {
  render() {
    return (
      <View>
          <Card>
            <CardItem >
              <Body  style={styles.container}>
                <Text>
                    Basic - Will be change
                </Text>
                <Button small transparent warning 
                        style={styles.paddingAdjust} 
                        >
                    <Icon name="arrow-forward" />
                </Button>
              </Body>
            </CardItem>
          </Card>
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
      }
  });