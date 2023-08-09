import { OrderItem } from './orderItem';
import { Orders } from './orders';

export interface Purchase {
  orders: Orders;
  orderItems: OrderItem[];
}
