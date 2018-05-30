import RestClient from 'react-native-rest-client';
 
export default class LoginClient extends RestClient {

constructor (authToken){
    super('http://tusk.poggers.com.br/tplink-1.0.3/api',{
    });
    } 
    login(username, password){
      return this.POST('/auth', {username,password});
    }
    getCurrentUser(){
      return this.GET('/auth')
      .then(response => response.user);
    }
    login(state){
        const api = new LoginClient();
        api.login(state.user, state.password)
          .then(response => response.token)
          .then(token => saveToken(token))
          .catch(err => alert(err.message));
      }
}