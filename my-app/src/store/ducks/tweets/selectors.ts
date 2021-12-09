import {TweetsState} from "./contracts/state";

export const selectTweets = (state: TweetsState) => state.items;