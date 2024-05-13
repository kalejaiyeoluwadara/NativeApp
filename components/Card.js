import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import color from '../config/colors'
import AppText from './AppText'
export default function Card({image,title,subtitle}){
  return(
    <View>
      <Image source={image} />
      <AppText>{title}</AppText>
      <AppText>{subtitle}</AppText>
    </View>
  )
}
const styles = StyleSheet.create({
  box:{
    borderRadius:25,
    backgroundColor:'white'
  }
})