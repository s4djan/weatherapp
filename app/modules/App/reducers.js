import { combineReducers } from 'redux'

import app from './redux';
import weather from 'app/modules/Weather/redux';


export default combineReducers({
    app,
    weather
})