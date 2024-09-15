import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Store } from '@ngrx/store';
import * as OrderTrackingActions from '../Pages/order-tracking/store/orderTracking.actions';
import { Order } from '../Pages/order-tracking/order.model';
import { apiEnvKey, environment } from "../Requests/Options/BaseUrl";

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private hubConnection!: signalR.HubConnection;
  private isConnected = false;

  constructor(private store: Store) {
    this.startConnection();
  }

  public startConnection() {
    if (!this.isConnected) {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(`${environment(apiEnvKey)}/hubs/order`)
        .withAutomaticReconnect()
        .build();

      this.hubConnection
        .start()
        .then(() => {
          console.log('SignalR Connection started');
          this.addOrderUpdateListener();
          this.isConnected = true;
        })
        .catch((err) => console.log('Error while starting connection: ' + err));
    }
  }

  public stopConnection() {
    if (this.hubConnection && this.isConnected) {
      this.hubConnection.stop().then(() => {
        console.log('SignalR Connection stopped');
        this.isConnected = false;
      }).catch(err => console.log('Error stopping SignalR connection:', err));
    }
  }

  private addOrderUpdateListener() {
    this.hubConnection.on('ReceiveOrderListUpdate', (orders: Order[]) => {
      console.log('Received orders from SignalR:', orders);
      this.store.dispatch(new OrderTrackingActions.GetOrdersSuccess(orders));
    });
  }
}
