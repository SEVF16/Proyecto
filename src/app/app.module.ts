import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule} from '@ionic/storage-angular';
import { ComponentsModule } from './components/components.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    BrowserAnimationsModule, 
    IonicStorageModule.forRoot(),
    ComponentsModule,
    HttpClientModule
  ],
  providers: [ 
    { 
    provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
