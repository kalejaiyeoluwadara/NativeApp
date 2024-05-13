import React from 'react'
import {View,ImageBackground,StyleSheet,Image,Text,Platform,StatusBar} from 'react-native'

import colors from '../config/colors'

export default function ViewImage(){
  return(
   <View style={styles.container} >

   <View style={styles.menu}>
   <View style={{height:50,width:50,backgroundColor:colors.primary}} />
   <View style={{height:50,width:50,backgroundColor:colors.secondary}} />
   </View>
   <View style={styles.imageView}>
   <Image resizeMode='contain' style={{height:'100%',width:'100%'}} source={require('../assets/chair.jpg')} />
   </View>
   </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  menu:{
   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   width:'100%',
   alignItems:'center',
   flexDirection:'row',
   justifyContent:'space-between',
   
   paddingHorizontal:2
  },
 
  imageView:{
    width:'100%',
    height:400,
    flex:1,
    marginTop:30
  }
 
 
});