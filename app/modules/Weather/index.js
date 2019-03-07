import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import moment from 'moment';

import HeroCard from './components/HeroCard';
import DailyCard from './components/DailyCard';

import { fetchWeather } from './redux';

import styles, {navigatorStyle} from './style';

class WeatherScreen extends Component{

    static navigationOptions = {
        title: 'Weather Forecast',
        ...navigatorStyle
    };

    componentDidMount(){
        this._requestWeather();
    }

    render (){
        const formatedWeather = this._formatWeather();
        
        return (
            <View style={styles.container}>
                <View style={styles.hero}>
                    <View style={styles.whitePlaceholder}>
                        {formatedWeather.length > 0 &&
                        <HeroCard
                            onPressButton={this._onPressButton}
                            {...formatedWeather.shift()}
                        />}
                    </View>
                </View>
                <View style={styles.cards}>
                    {formatedWeather.length > 0 && 
                        formatedWeather.map((item, i) => (
                            <View key={i} style={styles.card}>
                                <View style={styles.whitePlaceholder}>
                                    <DailyCard
                                        onPress={(e) => this._onDailyCardPress(e, item)}
                                        {...item}/>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }

    _requestWeather = (startDate = moment().format('YYYY-MM-DD')) => {

        //@TODO create date format constant 
        const endDate = moment(startDate, 'YYYY-MM-DD')
            .add(4, 'days')
            .format('YYYY-MM-DD');

        this.props.requestWeather(startDate, endDate);
    }

    _onPressButton = (e) => {
        const { navigate } = this.props.navigation;
        navigate('WeatherHourly');
    }

    _onDailyCardPress = (e, item) => {
        this._requestWeather(item.date);
    }

    _formatWeather = () => {
        const { weatherData } = this.props;

        return weatherData.map((day) => this._formatData(day));
    }
        

    _formatData = (weatherDay) => {

        return {
            dateText: moment(weatherDay.date, 'YYYY-MM-DD')
                .format('ddd, MMM D')
                .toUpperCase(),
            date: weatherDay.date,  
            temp:weatherDay.temperature,
            morningTemp: weatherDay.morning_temperature,
            descriptionFlag: weatherDay.hourly.AM[1].description_flag,
            realFeel: weatherDay.real_feel,
            precipitation: weatherDay.precipitation,
            maxUvIndex: weatherDay.max_uv_index,
            rain: weatherDay.rain,
            sunrise: moment(weatherDay.sunrise_time, 'HH:mm').format('h:mm A'),
            sunset: moment(weatherDay.sunset_time, 'HH:mm').format('h:mm A'),
        }
    }
}

const mapStateToPops = state => {
    return {
        fetching: state.weather.fetching,
        weatherData: state.weather.data,
        error: state.weather.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestWeather: (startDate, endDate) => 
            dispatch(fetchWeather(startDate, endDate))
    }
}

export default connect(mapStateToPops, mapDispatchToProps)(WeatherScreen);