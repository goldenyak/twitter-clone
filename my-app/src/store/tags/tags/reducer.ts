import produce, {Draft} from "immer";
import {LoadingState, TagsState} from "./contracts/state";
import {TagsActions, TagsActionType} from "./actionCreators";

export const initialTagsState: TagsState = {
    items: [],
    loadingState: LoadingState.NEVER,
}

export const TagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {

    switch (action.type) {
        case TagsActionType.SET_TAGS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TagsActionType.FETCH_TAGS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TagsActionType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }

}, initialTagsState);
