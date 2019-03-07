const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";


const initialState = {
  
  weatherRequest: {
    fetching: false,
    data: [],
    error: null,
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, 
        weatherRequest: {...state.weatherRequest, 
          fetching: true, 
          error: null} };
    case API_CALL_SUCCESS:
      return { ...state, 
        weatherRequest:{...state.weatherRequest, 
          fetching: false, 
          data: action.data } };
    case API_CALL_FAILURE:
      return { ...state, 
        weatherRequest: {...state.weatherRequest, 
          fetching: false, 
          data: null, error: action.error } };
    default:
      return state;
  }
}

export const fetchWeather = (startDate, endDate) => ({
  type: API_CALL_REQUEST,
  payload: {
    startDate,
    endDate
  }
})