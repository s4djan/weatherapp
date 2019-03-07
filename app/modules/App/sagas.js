import { all } from 'redux-saga/effects';

import { weatherSaga } from 'app/modules/Weather/saga';

export default function* rootSaga() {
    yield all([
        ...weatherSaga
    ])
}