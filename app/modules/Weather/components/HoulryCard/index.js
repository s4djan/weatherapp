import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import WeatherIcon from "../WeatherIcon";

//@TODO move capitlize to utils
//@TODO move style to separate file
const HourlyCard = ({
    time,
    precipitation,
    temperature,
    description_flag,
    wind
}) => (
    <View style={styles.container}>
        <Text style={styles.timeText} >{time}</Text>
        <View style={styles.weatherWrapper}>
            <WeatherIcon
                size="sm"
                type={description_flag}
            />
        </View>
        <Text style={styles.descText}>{description_flag.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}</Text>
        <Text style={styles.degreeText}>{temperature}&#176;</Text>
        <Text style={styles.windText}>{wind}km/h</Text>
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
        color: '#8f8f8f',
        height: 40
    },
    degreeText: {
        fontSize: 40,
        lineHeight: 40,
        marginTop: 10,
        textAlign: 'center',
        color: '#000'
    },
    windText: {
        fontSize: 16,
        color: '#000',
        paddingBottom: 5
    }
})


export default HourlyCard;