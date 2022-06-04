import {
    FAILURE_TRACK,
    GET_TRACK,
    SUCCESS_TRACK,
    TrackActionType,
  } from './types';

import services from '../../../services/Cep.service';
import { ReduxCycle, thunkGet } from '../../reduxMethods';
import { ResponseError } from '../../genericTypes';
import { ITrack } from '../../../types/Cep.model';

  // Start: GET > Track List
const trackRequestAction = () => ({
  type: GET_TRACK,
});
const trackSuccessAction = (trackList: ITrack) => ({
  type: SUCCESS_TRACK,
  payload: { trackList },
});
const trackFailureAction = (err: ResponseError) => ({
  type: FAILURE_TRACK,
  payload: { error: err },
});
const GET_TRACK_ACTIONS: ReduxCycle<ITrack> = {
  ACTION: () => trackRequestAction(),
  SUCCESS: (response) => trackSuccessAction(response as ITrack),
  FAILURE: (error) => trackFailureAction(error),
};
export const thunkGetTrack = (code: any) =>
  thunkGet<TrackActionType, ITrack, { code: any }>(
    { ...GET_TRACK_ACTIONS },
    services.GET_TRACK,
    code,
  );
// End: GET > Track List