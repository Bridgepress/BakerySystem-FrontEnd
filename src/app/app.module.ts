import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './Components/navigation/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';
import { OrderTrackingComponent } from './Pages/order-tracking/order-tracking.component';
import {MatIconModule} from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { ProductListEffects } from './Pages/home/store/productList.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromApp from './store/app.reducer';
import { ProducDetailComponent } from './Pages/home/produc-detail/produc-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'; // If using grid layout
import { MatCardModule } from '@angular/material/card';
import { ProducInfoComponent } from '../app/Pages/home/produc-info/produc-info.component'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { OrderTrackingEffects } from './Pages/order-tracking/store/orderTracking.effects';
import { SignalRService } from './Services/signalR.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    OrderTrackingComponent,
    ProducDetailComponent,
    ProducInfoComponent
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([ProductListEffects, OrderTrackingEffects]),
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    SignalRService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
