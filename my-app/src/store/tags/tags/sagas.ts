import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {LoadingState} from "./contracts/state";
import {setTags, setTagsLoadingState, TagsActionType} from "./actionCreators";

export function* fetchTagsRequest() {

    try {
        // @ts-ignore
        const items = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
    
}

export function* TagsSaga() {
    yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsRequest);
}
