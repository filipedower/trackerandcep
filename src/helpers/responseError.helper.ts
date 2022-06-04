import { AxiosError } from 'axios';
import { ResponseError } from '../store/genericTypes';

const internalErrorStr = 'internal_error_500';
export const getResponseErrorObject = (
  errorResponse: AxiosError,
): ResponseError => ({
  status: errorResponse.response?.status || null,
  data: errorResponse.response?.data || internalErrorStr,
});
