import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import WeatherIcon from '../WeatherIcon';


const DailyCard = ({
    onPress,
    dateText,
    temp,
    morningTemp,
    descriptionFlag,
    realFeel
}) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.dateText}>{dateText}</Text>
        <View style={styles.weatherIconWrapper}>
            <WeatherIcon
                size="md"
                type={descriptionFlag}
            />
        </View>
        <View style={styles.degreeWrapper}>
            <Text style={styles.degreeText}>{temp}&#176;</Text>
            <Text style={styles.degreeLightText}> / {morningTemp}&#176;</Text>
        </View>
        <Text style={styles.listText}>ReelFeel: {realFeel}&#176;</Text>
    </TouchableOpacity>
);

DailyCard.propTypes = {
    dateText: PropTypes.string,
    temp: PropTypes.number,
    morningTemp: PropTypes.number,
    descriptionFlag: PropTypes.string,
    realFeel: PropTypes.number
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
        padding: 12
    },
    dateText: {
        textAlign:'center',
        fontWeight: 'bold',
        color: '#000'
    },
    weatherIconWrapper: {
        flex: 1, 
        justifyContent:'center', 
        alignItems: 'center'
    },
    degreeWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    degreeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000'
    },
    degreeLightText: {
        fontSize: 18,
        color: '#b7b7b7',
        paddingTop: 5
    },
    listText: {
        color: '#000',
        textAlign:'center',
        paddingTop: 3
    }
});

export default DailyCard;

