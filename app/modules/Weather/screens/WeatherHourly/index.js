import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';

import { SolidButton, ClearButton } from '../../components/Button';
import HourlyCard from '../../components/HoulryCard';
 
import styles, { navigatorStyle } from './style';

class WeatherHourlyScreen extends Component{
    
    static navigationOptions = {
        title: '[Thursday, August 9]',
        ...navigatorStyle
    };

    constructor(props){
        super(props);
        this.state = {
            loadedData: [],
            remainingData: [],
            seeAll: false
        }
    }

    componentDidMount(){
        this._loadData();
    }

    render(){

        const { loadedData, remainingData, seeAll } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hourly View</Text>
                <View style={styles.scrollView}>
                    <ScrollView>
                        <View style={styles.cardsWrapper}>
                            {loadedData.length > 0 && loadedData.map((hour) => 
                                <View key={hour.time} style={styles.cardWrapper}>
                                    <HourlyCard {...hour}/>
                                </View>
                            )}
                        </View>
                    </ScrollView>
                </View>
                {!seeAll && 
                <View style={{marginLeft:8, marginRight: 8}}>
                    <SolidButton 
                    onPress={this._onPressSeeAll} 
                    title={`Show next ${remainingData.length} hours`}/>
                </View>}
            </View> 
        );
    }

    _loadData = () => {
        const { weatherData } = this.props;
        let loadedData = [];
        let remainingData = [];
        const selectedWeatherDate = weatherData[0];
        const currentDate = moment();
        const currentDateString = currentDate.format('YYYY-MM-DD');
        const currentFormat = currentDate.format('A');
        const currentHour = currentDate.format('h');
        
        
        const formats = selectedWeatherDate.hourly;

        for(const format in formats){

            const hours = formats[format];

            for(const hour in hours){

                const hourData = hours[hour];

                if(selectedWeatherDate.date === currentDateString &&
                    this._convertTime(hour, format) <= this._convertTime(currentHour, currentFormat))
                    continue;

                    console.log(hour, currentHour);

                const data = {
                    time: `${hour} ${format}`,
                    ...hourData
                };

                if(loadedData.length < 8){
                    loadedData.push(data);
                }else{
                    remainingData.push(data);
                }
            }
        }

        this.setState({
            loadedData,
            remainingData,
            seeAll: remainingData.length === 0
        });
    }

    _convertTime = (hour, format) => 
        parseInt(hour) + (format === 'PM' ? 12 : 0);

    _onPressSeeAll = () => {
        const {loadedData, remainingData} = this.state;
        this.setState({
            loadedData: [...loadedData, ...remainingData],
            remainingData: [],
            seeAll: true
        });
    }
};

const mapStateToPops = state => {
    return {
        weatherData: state.weather.weatherRequest.data
    }
}

export default connect(mapStateToPops)(WeatherHourlyScreen);