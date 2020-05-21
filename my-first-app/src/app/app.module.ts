import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component'
import { ServersComponent } from './servers/servers.component';
import { WarningSuccessComponent } from './warning-success/warning-success.component';
import { WarningDangerComponent } from './warning-danger/warning-danger.component'

@NgModule({
  declarations: [
    AppComponent,    
    ServerComponent,
    ServersComponent,
    WarningSuccessComponent,
    WarningDangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
