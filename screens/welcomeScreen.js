import React from 'react'
import {View,ImageBackground,StyleSheet,Image,Text} from 'react-native'
import AppButton from '../components/AppButton'
export default function WelcomeScreen(){
  return(
    <ImageBackground blurRadius={10}  style={styles.background} source={require('../assets/background.jpg')} >
     <View style={styles.logoContainer} >
       <Image style={styles.logo} source={require('../assets/logo-red.png')} />
       <Text style={styles.tagline} >Sell what you don't need</Text>
     </View>
    <View style={styles.buttonContainer} >
      <AppButton name="Login"  />
      <AppButton name="register" color="secondary"  />
      
    </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  tagline:{
    fontSize:25,
    fontWeight:600,
    paddingVertical:20
  },
  background:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoContainer:{
    position:'absolute',
    top:70,
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonContainer:{
    padding:20,
    width:'100%'
  },
 
  
  logo:{
    height:100,width:100,
    
  }
 
});