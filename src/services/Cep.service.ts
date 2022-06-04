import { ITrack } from '../types/Cep.model';
import base from './base';
import RequestService from './RequestService';

const getTrack = (code: any) =>
  RequestService.get<ITrack>(base().api.tracker(code));


const budgetService = {
  GET_TRACK: getTrack,
};

export default budgetService;
