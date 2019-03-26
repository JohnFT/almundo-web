import { IHotel } from '../interfaces/hotel';

export class Hotel implements IHotel {
  id: number;
  name: string;
  stars: number;
  price: number;
  image: string;
  amenities: string[];
}
