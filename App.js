import React from 'react';
import { View, StyleSheet, Text,SafeAreaView,Platform,StatusBar } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'
import Cards from './screens/Cards'
import ViewImage from './screens/ViewImage'
import AppButton from './components/AppButton'
import  AppText from './components/AppText'
import { MaterialIcons } from '@expo/vector-icons';
export default function App() {
  
  return( 
    
    // <ViewImage/>
      // <WelcomeScreen/>
      <Cards/>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
 
  txt:{
    fontFamily:'Roboto',
    fontSize:30
  }
});
