import { createStackNavigator,  
    createAppContainer } from 'react-navigation';

import WeatherScreen from 'app/modules/Weather';
import WeatherHourlyScreen from 'app/modules/Weather/screens/WeatherHourly';

   
const RootStack = createStackNavigator(
    {
        Weather: {screen: WeatherScreen},
        WeatherHourly: {screen: WeatherHourlyScreen}
    },
    {
        initialRouteName: 'Weather'
    }
);

export default function createContainer(){
    return createAppContainer(RootStack);
}