import { IGuest } from './IGuest';

export interface ITable {
  name: string;
  guests?: IGuest [];
  guestsArrived?: IGuest[];
}
