import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  ActivityIndicator, Button, Image, ImageBackground, StyleSheet, 
  Text, TextInput, TouchableOpacity, View , Alert
} from 'react-native';
import { AsyncStorage } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      success: '',
      loading: false
    };

  }

  handleClick(){
    this.setState({loading:true});
    console.log("State added now calling api ....")
    
    const uri = "https://marktestapp.pythonanywhere.com/api/auth/rider/login/"; 
    fetch(uri, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        loading: false
      })
      if (response.tokens != undefined){
        AsyncStorage.setItem('user_id', response.id);
        AsyncStorage.setItem('email', response.email);
        AsyncStorage.setItem('username', response.username);
        AsyncStorage.setItem('access', response.tokens.access);
        AsyncStorage.setItem('refresh', response.tokens.refresh);
        
        Alert.alert("Successfully Login", "Welcome back Mr "+response.username);

      }else{
        setTimeout(() => {
          Alert.alert('Warning',"Invalid credentials are provided");
        }, 100);
      }
    });
  }


  render(){ 
    return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/mobile-bg.jpg")}  style={styles.image}>
      <Image source={require("./assets/favicon.png")}></Image>
      <Text style={styles.h1}>EXARTH</Text>
      <Text numberOfLines={1} style={styles.textWhite}>the home of exalters is building exarth core team.</Text>
      {/* <ActivityIndicator size="large" color="red"/> */}

       <View style={{top:5, marginBottom:20}}>
        <Text style={{color:"white", left: 14}}>Email</Text>
        <TextInput style={styles.input} cursorColor="red" value={this.state.email} onChangeText={(text)=>this.setState({email:text})} autoComplete="email"/>

        <Text style={{color:"white", left: 14}}>Password</Text>
        <TextInput style={styles.input} value={this.state.password} onChangeText={(text) => this.setState({password:text})}/>
       </View>

       <Button block info style={styles.button} onPress={() => this.handleClick()} title='Become an exalter' color="red" touchSoundDisabled="true"  accessibilityLabel="accessible now" />

      <StatusBar style="auto" accessible="true"/>
      </ImageBackground>
    </View>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  h1: {
    color:"white",
    fontWeight:"bold",
    fontSize: 50,
    textAlign: "center"
  },

  textWhite: {
    color: "white",
    textAlign: "center",
    bottom:8
  },

  button:{
    padding:20,
    left:10,
    right:10
  },

  input:{
    backgroundColor: "#fff",
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  image: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
});


export default App;