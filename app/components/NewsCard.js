import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView, Image } from 'react-native';

export default class NewsCard extends Component {
  render() {
    return (
      <View>
        <Content>
          <Card >
            <CardItem>
              <Body>
                <Text style={styles.textCorrect}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ar Vestibulum.
                </Text>
                
                <Text style={styles.subtitle}>
                  2018/03/01
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
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
    },
    subtitle: {
      paddingTop: '2%',
      fontSize: 12,
      textAlign: 'right'
    }
  });