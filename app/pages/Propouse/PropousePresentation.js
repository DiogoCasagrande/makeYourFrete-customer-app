import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Button, Grid, Col, Left, Input, Item, Label} from 'native-base';
import { Platform, StyleSheet, View, input, ScrollView, Image, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import GlobalLayout from '../../library/GlobalStyles/GlobalLayout';

import axios from 'axios';
import Moment from 'moment';

export default class PropousePresentation extends Component {

    state = {
        news:[],
        newsTitle:[],
        currentOrientation: '',
        orientationDegress: 0,
        isLandscape: false,
        price:[]
    }
    

    componentDidMount(){

        // const { params } = this.props.navigation.state;
        // const idNews = params ? params.idNews : null;

        // this.setState({newsTitle: params ? params.newsTitle : null})
        // console.log(idNews);
        
        // var instance = axios.create({
        //     baseURL: 'http://tusk.poggers.com.br/tplink-1.6/',
        //     timeout: 1000,
        //     headers: {'X-Custom-Header': 'foobar', 'Authorization':token}
        //   });
   
        //  instance.get(`http://tusk.poggers.com.br/tplink-1.6/api/news/${idNews}`)
        //  .then(response => 
        //     this.setState({ news: response.data.newsDetails }));         
    }

    setPrice(text){
        let newText = '';
        let numbers = '0123456789,.';

        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only or ( , . )");
            }
        }
        this.setState({ price: newText });
    }

  render() {
    // Moment("pt-br")
    // console.log(this.state.news.url);
    return (
        <View style={inStyles.iboxcontent}>
        <ScrollView>
            <CardItem>
                <Left>
                    <Body>
                        <Text style={inStyles.title}>XX/XX/XXXX</Text>
                        <Text style={inStyles.subtitle} note>Propouse Title HERE</Text>
                    </Body>
                        </Left>
            </CardItem>
            <CardItem>
                    <Body>
                        {/* <Image source= style={{height: 200, width: '100%', flex: 1}}/> */}
                        <Text>PROPOSE TITLE****</Text>
                            <Text style={inStyles.paddingAdjust}>
                            Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. 
                            Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina 
                            clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College 
                            na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma 
                            passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, 
                            descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus
                             Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é 
                             um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem 
                             Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.

                            O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para 
                            os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cicero também 
                            foram reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da 
                            tradução feita por H. Rackham em 1914.
                            </Text>
                            <Text>PROPOSE IMAGES****</Text>
                            <Text>{`\n`}</Text>
                            <Grid style={{marginBottom:'0%',borderTopWidth: 1, borderTopColor: '#D9DDDF',}}>
                            <Col style={{ marginRight:'10%', marginLeft:'10%'}}>

                            <Item floatingLabel> 
                                <Label>Price</Label> 
                                <Input onChangeText={(text)=> this.setPrice(text)} value={this.state.price} /> 
  
                            </Item>   
                            </Col>
                            <Col style={{ marginRight:'10%', marginLeft:'10%'}}>
                            {/* <Button style={GlobalLayout.alertButton} block onPress={this.sendOffer.bind(this)}> */}
                            <Button style={GlobalLayout.alertButton} block >
                                <Text style={{color:'white', fontWeight: 'bold'}}>makeOffer</Text>
                            </Button>
                            </Col>
                            <Text/>      
                            </Grid>                        
                        </Body>
            </CardItem>        
            <Text/>
            <Button style={GlobalLayout.alertButton} block  >
                  <Text style={{color:'white', fontWeight: 'bold'}}>Cancel</Text>
                </Button>            
      </ScrollView>
      </View>
    );
  }
}

const inStyles = StyleSheet.create({
    paddingAdjust:{
        paddingTop: "3%",
      }, 
    title: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: '7%'
      },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '2%'
    },
    iboxcontent:{
        backgroundColor:'white',
        width: '100%',
        height: '100%'
    },
  });