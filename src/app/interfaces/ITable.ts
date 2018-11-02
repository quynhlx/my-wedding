import { IGuest } from './IGuest';

export interface ITable {
  name: string;
  total: Number;
  seats?: IGuest [];
  checkedInSeats?: IGuest[];
}
