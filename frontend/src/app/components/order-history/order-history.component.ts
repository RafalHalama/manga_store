import { Component, OnDestroy, OnInit } from '@angular/core';
import { Orders } from 'src/app/common/orders';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit, OnDestroy {
  data: Orders[] = [];
  constructor(private orderService: OrderHistoryService) {}

  ngOnInit(): void {
    this.orderService.getOrderList().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {}
}
