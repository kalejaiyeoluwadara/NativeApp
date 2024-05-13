import React from 'react'
import {View,StyleSheet,Image,Text,} from 'react-native'
import AppText from './components/AppText'
import colors from './config/colors'

export default function Cardt({title,subtitle,image}){
  return(
   <View style={styles.card} >
    <Image source={require(image)} />
    <AppText>{title}</AppText>
    <AppText>{subtitle}</AppText>
   </View>
  )
}


const styles = StyleSheet.create({
 card:{
   borderRadius:15,
   backgroundColor:'white'
 }
 
});