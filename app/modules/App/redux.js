const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const initialState = {
    showLoader: false
}

export default function(state = initialState, action){
    switch(action.type){
        case SHOW_LOADER:
            return { ...state, showLoader: true };
        case HIDE_LOADER:
            return { ...state, showLoader: false };
        default:
            return state;
    }
}