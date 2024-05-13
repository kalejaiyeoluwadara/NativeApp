import React from 'react'
import {View,ImageBackground,StyleSheet,Image,Text,Platform,StatusBar} from 'react-native'
import colors from '../config/colors'
import Card from '../components/Card'
export default function Cards(){
  return(
   <View style={{
     backgroundColor:'#f8f4f4',
     padding:20,
     height:'100%',
     paddingTop:100
   }} >
   <Card/>
   </View>
  )
}


const styles = StyleSheet.create({
 
 
});