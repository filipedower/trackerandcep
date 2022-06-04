import { combineReducers } from 'redux';

import { TrackState, listReducer } from './Tracker';

export interface ReadonlyTrackState {
  readonly list: TrackState;
}

export const userReducer = () =>
  combineReducers<ReadonlyTrackState>({
    list: listReducer,
  });
