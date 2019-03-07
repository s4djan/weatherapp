import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { ClearButton } from '../Button';
import WeatherIcon from '../WeatherIcon';

import styles from './style';

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


export default HeroCard;