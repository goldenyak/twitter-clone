export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export interface Tweet {
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string,
    };
    text: string,
}

export interface TweetsState {
    items: Tweet[],
    loadingState: LoadingState,
}