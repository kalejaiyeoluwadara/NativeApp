import React from 'react';
import { Text, StyleSheet,  TouchableOpacity } from 'react-native';
import colors from '../config/colors'
function AppButton({ name,onPress, color="primary" }) {
  return (
   <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress} >
      <Text style={styles.text} >{name}</Text>
    </TouchableOpacity>
  )
}
export default AppButton;

const styles = StyleSheet.create({
  button:{
    backgroundColor:colors.primary,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    padding:15,
    width:'100%'
  },
  text:{
    color:'#fff',
    fontSize:18,
    textTransform:'uppercase',
    fontWeight:'bold'
  }
});
