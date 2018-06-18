import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';

const requestInfo = {
    method: 'POST',
    body: JSON.stringify({
      login: this.state.usuario,
      senha: this.state.senha,
    }),
    headers: new Headers({
      'Content-type': 'application/json'
    })
}

class Login {

    constructor(){
        super();
        this.state = {
            name: '',
            cpf: '',
            email = '',
            contactNumber = '',
            password = '',
            company = '',
            message = ''
        }
    }

    login(){
        fetch('localhost:8080-1.0.3/api/auth/signup',requestInfo)
        .then(response => {
            if(response.ok){
                console.log(response.status);
            }
        }).then(token => {
            AsyncStorage.setItem('token', token);

            this.props.navigation.navigate('drawerStack')
        }).catch(
            console.log('SERIOUS IT IS A SHEET')
        )
    }
}

