import { IPayload } from '../../genericTypes';
import { ITrack } from '../../../types/Cep.model';

export const GET_TRACK: string = 'GET_TRACK';
export const SUCCESS_TRACK: string = 'SUCCESS_TRACK';
export const FAILURE_TRACK: string = 'FAILURE_TRACK';

export interface TrackState {
  readonly error?: string | unknown[];
  readonly trackList?: ITrack[];
  readonly loading?: boolean;
}

interface RequestAction {
  type: typeof GET_TRACK;
}

interface SuccessAction {
  type: typeof SUCCESS_TRACK;
}

interface FailureAction {
  type: typeof FAILURE_TRACK;
}

export type TrackActionType = (
  | RequestAction
  | SuccessAction
  | FailureAction
) &
  IPayload<TrackState>;
