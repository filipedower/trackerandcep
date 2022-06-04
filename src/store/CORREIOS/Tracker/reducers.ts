import {
    FAILURE_TRACK,
    GET_TRACK,
    SUCCESS_TRACK,
    TrackActionType,
    TrackState,
   } from './types';
   

const INIT_STATE: TrackState = {
     error: undefined,
     loading: false,
     trackList: [],
   };
   
const reducer = (state = INIT_STATE, action: TrackActionType): TrackState => {
    switch (action.type) {
       case GET_TRACK:
         return {
           ...state,
           loading: true,
         };
   
       case SUCCESS_TRACK:
         return {
           ...state,
           trackList: action?.payload?.trackList || [],
           loading: false,
         };
   
       case FAILURE_TRACK:
         return {
           ...state,
           error: action?.payload?.error,
           loading: false,
         };
   
       default:
         return state;
     }
   };
   
   export default reducer;
   