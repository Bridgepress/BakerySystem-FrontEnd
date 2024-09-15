import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as OrderTrackingActions from './store/orderTracking.actions';
import { SignalRService } from '../../Services/signalR.service';

interface TypeStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrl: './order-tracking.component.css'
})

export class OrderTrackingComponent implements OnInit, OnDestroy {
  orders$!: Observable<{orders: Order[]}>;
  statuses: TypeStatus[] = [
    {value: 'Pending', viewValue: 'Pending'},
    {value: 'Issued', viewValue: 'Issued'},
  ];

  constructor(
    public signalRService: SignalRService, 
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.store.dispatch(new OrderTrackingActions.GetOrders());
      this.orders$ = this.store.select('orderTracking');
      this.signalRService.startConnection();
    }
  }
  ngOnDestroy() {
    this.signalRService.stopConnection();
  }

  onStatusChange(order: Order, newStatus: string) {
    const updatedOrder = { ...order, status: newStatus };
    this.store.dispatch(new OrderTrackingActions.UpdateOrder(updatedOrder));
  }
}