import React, { Component } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';

import { SolidButton, ClearButton } from '../../components/Button';
import HourlyCard from '../../components/HoulryCard';
 
import styles, { navigatorStyle } from './style'

export default class WeatherHourlyScreen extends Component{
    
    static navigationOptions = {
        title: '[Thursday, August 9]',
        ...navigatorStyle
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hourly View</Text>
                <View style={styles.scrollView}>
                    <ScrollView>
                        <View style={styles.cardsWrapper}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => <View key={i} style={styles.cardWrapper}>
                                <HourlyCard/>
                            </View>)}
                        </View>
                    </ScrollView>
                </View>
                <SolidButton title="[Show next 5 hours]"/>
            </View> 
        );
    }
};