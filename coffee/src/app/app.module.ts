import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import {TokenService} from './core/token.service';
import {Auth} from './core/app.auth'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TokenService,Auth], 
  bootstrap: [AppComponent]
})
export class AppModule { }
