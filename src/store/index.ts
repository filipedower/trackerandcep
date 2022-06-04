import { combineReducers } from 'redux';
import * as TrackStore from './CORREIOS';

export * from './CORREIOS';

export interface ReadonlyState {
  readonly track: TrackStore.ReadonlyTrackState;
}

export const rootReducer = () =>
  combineReducers<ReadonlyState>({
    track: TrackStore.userReducer(),
  });

export type RootState = ReturnType<typeof rootReducer>;