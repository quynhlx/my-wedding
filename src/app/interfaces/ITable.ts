import { IGuest } from './IGuest';

export interface ITable {
  id?: string;
  name: string;
  total: Number;
  seats?: IGuest [];
  checkedInSeats?: IGuest[];
}
