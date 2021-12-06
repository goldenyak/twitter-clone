import {call, takeEvery, takeLatest} from 'redux-saga/effects'
import { TweetsActionType} from "./actionCreators";
import { TweetsApi} from "../../../services/api/tweetsApi";

export function* fetchTweetsRequest() {
    // @ts-ignore
    const data = yield call(TweetsApi.fetchTweets)
    console.log(data)
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}
