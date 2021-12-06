import {takeEvery} from 'redux-saga/effects'
import {TweetsActionType} from "./actionCreators";

export function* fetchTweetsRequest() {
    console.log('test')
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}
