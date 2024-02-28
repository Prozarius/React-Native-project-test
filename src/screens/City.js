import React from "react";
import { SafeAreaView, Text, StyleSheet, Platform, StatusBar, ImageBackground, View } from "react-native";
import { Feather } from "@expo/vector-icons"

const City = () => {
    return (
        <SafeAreaView style = {styles.droidSafeArea}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style = {styles.imageLayout}>
                <Text style = {[styles.cityName , styles.cityText]}>London</Text>
                <Text style = {[styles.countryName, styles.cityText]}>UK</Text>
                
                <View style = {styles.populationWrapper}>
                    <Feather name='user' size = {50} color = 'red'/> 
                    <Text style = {styles.populationText}>8000</Text>       
                </View>

                <View style={styles.riseSetWrapper}>
                    <Feather name = 'sunrise' size ={50} color='white'/>
                    <Text style = {styles.riseSetText}>10:46:26 AM</Text>
                    <Feather name = 'sunset' size ={50} color='white'/>
                    <Text style = {styles.riseSetText}>17:28:35 PM</Text>
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
        fontWeight: 'bold'
    },
    populationWrapper:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText:{
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-around',
        marginTop: 20
    },
    riseSetText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})

export default City