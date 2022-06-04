export enum ETrack {
    Codigo = 'codigo',
    Host = 'host',
    Eventos = 'eventos',
    Status = 'status',
    Local = 'local',
    Data = 'data',
    Hora = 'hora',
    Substatus = 'substatus'
  }

  export interface IEvents {
      [ETrack.Status]: string,
      [ETrack.Local]: string,
      [ETrack.Data]: string,
      [ETrack.Hora]: string,
      [ETrack.Substatus]: string[],
  }
  
  export interface ITrack {
    [ETrack.Codigo]: string;
    [ETrack.Host]: string;
    [ETrack.Eventos]: IEvents[];   
}