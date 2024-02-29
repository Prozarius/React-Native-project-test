import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar} from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {
    droidSafeArea,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow, 
    bodyWrapper,
    description,
    message
  } = styles
  return(
    <SafeAreaView style={droidSafeArea}>
      <View style ={container}>

        <Feather name="sun" size={100} color= 'black'/>
        
        <Text style = {temp}>6</Text>
        <Text style = {feels}>Feels like: 7</Text>
        
        <RowText 
          messageOne = {'High: 8'} 
          messageTwo = {'Low: 5'} 
          containerStyles = {highLowWrapper} 
          messageOneStyles = {highLow} 
          messageTwoStyles = {highLow}
        />

      </View>

      <RowText 
        messageOne = {"It's sunny"} 
        messageTwo = {"It's perfect t-shirt weather"} 
        containerStyles = {bodyWrapper}
        messageOneStyles = {description} 
        messageTwoStyles = {message}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels:{
    color: 'black',
    fontSize: 30
  },
  highLow:{
    color: 'black',
    fontSize: 20
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'pink'
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 50,
  },
  message:{
    fontSize: 30,
  },
})


export default CurrentWeather