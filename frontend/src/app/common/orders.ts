import { OrderItem } from './orderItem';

export interface Orders {
  totalQuantity: number;
  totalPrice: number;
  orderItems?: OrderItem[];
  dateCreated?: Date;
}
