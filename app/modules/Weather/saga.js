import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';

import NavigationService from 'app/modules/App/services/Navigation'

//@TODO move this to service and move url to env constants
function fetchWeather(startDate, endDate) {

    return axios({
        method: "get",
        url: `https://fishingbooker.com/jobs/weather_data?start_date=${startDate}&end_date=${endDate}`
    });
}

function* fetchWeatherSaga(action) {

    const { startDate, endDate } = action.payload;
    
    yield put({ type: "SHOW_LOADER" });

    try {
        const response = yield call(fetchWeather, startDate, endDate);
        
        yield put({ type: "API_CALL_SUCCESS", data: response.data });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }

    yield put({ type: "HIDE_LOADER" });
}

export const weatherSaga = [
    takeLatest('API_CALL_REQUEST', fetchWeatherSaga)
]