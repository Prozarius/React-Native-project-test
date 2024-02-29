import React from "react";
import { SafeAreaView, Text, StyleSheet, Platform, StatusBar, ImageBackground, View } from "react-native";
import { Feather } from "@expo/vector-icons"
import IconText from "../components/IconText";

const City = () => {
    const { droidSafeArea, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout} = styles
    return (
        <SafeAreaView style = {droidSafeArea}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style = {imageLayout}>
                <Text style = {[cityName , cityText]}>London</Text>
                <Text style = {[countryName, cityText]}>UK</Text>
                
                <View style = {[populationWrapper, rowLayout]}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles = {populationText} />
                </View>

                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName = {'sunrise'} iconColor = {'white'} bodyText = {'10:46:26 AM'} bodyTextStyles = {riseSetText}/>
                    <IconText iconName = {'sunset'} iconColor = {'white'} bodyText = {'17:28:35 PM'} bodyTextStyles = {riseSetText}/>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    droidSafeArea:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    imageLayout:{
        flex:1,
    },
    cityName:{
        fontSize: 40
    },
    countryName:{
        fontSize: 30
    }, 
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
    },
    populationWrapper:{
        justifyContent: 'center',
        marginTop: 30
    },
    populationText:{
        fontSize: 25,
        color: 'red',
        justifyContent: 'center'
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop: 20
    },
    riseSetText:{
        fontSize:20,
        color:'white',
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City