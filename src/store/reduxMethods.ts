import { Action } from 'redux';
import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';

import { Response } from '../services/RequestService';

import { RootState } from './index';
import { ResponseError } from './genericTypes';
import { getResponseErrorObject } from '../helpers/responseError.helper';

export type ReduxCycle<Q> = {
  // eslint-disable-next-line
  ACTION: (extra?: unknown) => any;
  // eslint-disable-next-line
  SUCCESS: (response?: Q[] | Q | unknown, extra?: unknown) => any;
  // eslint-disable-next-line
  FAILURE: (error: ResponseError) => any;
};

/**
 * thunkGet will return a list of Q
 * used to get data from a type
 * @type {unknown} > T - (): Promise<T>
 * @type {unknown} > Q - Data type / Array / const { data } = response: { data: Q | Q[]}
 * @param actions > A compose about full cycle: start -> end; Action -> Success/Failure
 * @param services > Service injection as object
 * @param payload > Payload includes action payload / example by { changes: {} , ids: { id, etc_id }
 */
export const thunkGet =
  <T, Q, P>(
    actions: ReduxCycle<Q>,
    service: (payload: P) => Promise<Response<Q | Q[]>>,
    payload: P,
  ): ThunkAction<Promise<T>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(actions.ACTION());
    return service(payload)
      .then(({ data }) => dispatch(actions.SUCCESS(data)))
      .catch((error: AxiosError) => {
        dispatch(actions.FAILURE(getResponseErrorObject(error)));
        return Promise.reject();
      });
  };
