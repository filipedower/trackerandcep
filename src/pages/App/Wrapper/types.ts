import { connect, ConnectedProps } from 'react-redux';

import {
  ReadonlyState,
  thunkGetTrack,
  TrackState,
} from '../../../store/index';

const mapState = (state: ReadonlyState): TrackState => {
  const { track: trackState } = state || {};

  const { loading, trackList, error } = trackState.list;

  return {
    loading,
    trackList,
    error,
  };
};

const mapDispatch = {
  thunkGetTrack,
};

export const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export type Props = PropsFromRedux;
