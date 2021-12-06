import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionType} from "./actionCreators";
import { TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";

export function* fetchTweetsRequest() {

    try {
        // @ts-ignore
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
    
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}
