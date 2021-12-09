import {TweetsState} from "./contracts/state";

export const selectTweets = (state: TweetsState) => state.items;

export const selectLoadingState = (state: TweetsState) => state.loadingState;