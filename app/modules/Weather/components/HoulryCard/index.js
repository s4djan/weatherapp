import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import WeatherIcon from "../WeatherIcon";

const HourlyCard = ({}) => (
    <View style={styles.container}>
        <Text style={styles.timeText} >1 PM</Text>
        <View style={styles.weatherWrapper}>
            <WeatherIcon
                size="sm"
                type="sunny"
            />
        </View>
        <Text style={styles.descText}>Partly Sunny</Text>
        <Text style={styles.degreeText}>33&#176;</Text>
        <Text style={styles.windText}>16km/h</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10
    },
    timeText: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center'
    },
    weatherWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descText: {
        fontSize: 16,
        color: '#8f8f8f'
    },
    degreeText: {
        fontSize: 43,
        color: '#000'
    },
    windText: {
        fontSize: 16,
        color: '#000',
        paddingBottom: 5
    }
})


export default HourlyCard;