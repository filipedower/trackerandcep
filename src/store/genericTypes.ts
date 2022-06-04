export interface IPayload<T> {
    payload?: T;
  }
  
  export interface IResponse<T> {
    response?: T;
  }
  
  export type ResponseError = {
    status: number | null;
    data: unknown | string;
  };
  