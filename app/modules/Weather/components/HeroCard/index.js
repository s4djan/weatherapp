import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { ClearButton } from '../Button';
import WeatherIcon from '../WeatherIcon';

const HeroCard = ({
    onPressButton,
    dateText,
    temp,
    morningTemp,
    descriptionFlag,
    realFeel,
    precipitation,
    maxUvIndex,
    rain,
    sunrise,
    sunset
}) => (
    <View style={styles.container}>
        <View style={styles.topWrapper}>
            <View style={{ flex: 1 }}>
                <Text style={styles.dateText}>{dateText}</Text>
                <View style={styles.degreeWrapper}>
                    <Text style={styles.degreeText}>{temp}&#176;</Text>
                    <Text style={styles.degreeLightText}> / {morningTemp}&#176;</Text>
                </View>
                <Text style={styles.descText}>Partly sunny, hot and humid</Text>
            </View>
            <View>
                <WeatherIcon
                    type={descriptionFlag}
                    size="lg"
                />
            </View>
        </View>
        <View style={styles.devider}/>
        <View style={styles.additionalWrapper}>
            <View style={{ flex: 1 }}>
                <Text style={styles.listText}>RealFeel: {realFeel}&#176;</Text>
                <Text style={styles.listText}>Percipitation: {precipitation}%</Text>
                <Text style={styles.listText}>Max UV Index: {maxUvIndex}</Text>
                <Text style={styles.listText}>Rain: {rain}mm</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.listLightText}>Sunrise:</Text>
                    <Text style={styles.listText}>{sunrise}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.listLightText}>Sunset:</Text>
                    <Text style={styles.listText}>{sunset}</Text>
                </View>
            </View>
        </View>
        <View style={styles.devider}/>
        <View>
            <ClearButton
                title="SEE HOURLY"
                justifyContent="flex-end"
                onPress={onPressButton}
            />
        </View>
    </View>
);

HeroCard.propTypes = {
    onPressButton: PropTypes.func,
    dateText: PropTypes.string,
    temp: PropTypes.number,
    morningTemp: PropTypes.number,
    descriptionFlag: PropTypes.string,
    realFeel: PropTypes.number,
    precipitation: PropTypes.number,
    maxUvIndex: PropTypes.number,
    rain: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string
}

const styles = StyleSheet.create({
    devider: {
        height: 1,
        backgroundColor: '#efefef'
    },  
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    topWrapper: {
        flex: 1, 
        flexDirection: 'row',
        paddingTop: 12,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15
    },
    dateText: {
        color: '#ff6738',
        fontWeight: 'bold',
        fontSize: 16
    },
    degreeWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    degreeText: {
        fontSize: 60,
        color: '#000'
    },
    degreeLightText: {
        fontSize: 40,
        color: '#b7b7b7',
        paddingTop: 8
    },
    descText:{
        fontSize: 20,
        color: '#b1b1b1'
    },
    additionalWrapper:{ 
        flexDirection: 'row',
        paddingTop: 12,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15
    },
    listText:{
        fontSize: 17,
        color: '#000000',
        marginBottom: 3
    },
    listLightText:{
        fontSize: 17,
        color: '#858585',
        marginBottom: 3
    }
});


export default HeroCard;