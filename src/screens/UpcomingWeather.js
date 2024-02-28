import React from "react";
import { SafeAreaView, Platform, StatusBar, StyleSheet, Text, FlatList, ImageBackground} from "react-native";
import WeatherItem from '../components/WeatherItem'

const DATA = [
    {
        dt_txt: "2024-02-27 21:21:20",
        main: {
            temp_max: 8.55,
            temp_min: 7.55 
        },
        weather:[{
            main: 'Clear'
        }]
    },
    {
        dt_txt: "2024-02-27 22:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55 
        },
        weather:[{
            main: 'Clouds'
        }]
    },
    {
        dt_txt: "2024-02-27 23:20:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55 
        },
        weather:[{
            main: 'Rain'
        }]
    }
]

const UpcomingWeather = () =>{
    const renderItem = ({item}) =>(
        <WeatherItem 
        condition= {item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min = {item.main.temp_min} 
        max = {item.main.temp_max}/>
    )
    const { droidSafeView, image} = styles
    return (
        <SafeAreaView style = {droidSafeView}>
            <ImageBackground source={require('../../assets/upcoming-background.jpg')} style = {image}>
                <Text>Upcoming Weather</Text>
                <FlatList
                    data = {DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    droidSafeView:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'royalblue'
    },
    image:{
        flex: 1
    }
})

export default UpcomingWeather