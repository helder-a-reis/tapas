import { Restaurant } from './Restaurant.model';

export interface Tapa {
    id: number;
    name: string;
    description: string;
    hours: string;
    restaurantId: number;
    restaurant?: Restaurant;
}