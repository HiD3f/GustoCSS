import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadersPageComponent } from './pages/headers-page/headers-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadersPageComponent,
    ButtonsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
