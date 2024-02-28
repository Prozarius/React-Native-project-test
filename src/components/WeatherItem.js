import React from "react";
import {View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons'

const WeatherItemItem = (props) => {
    const { dt_txt, min, max, condition } = props
    return(
        <View>
            <Feather name = {'sun'} size = {50} color={'white'}/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

export default WeatherItemItem