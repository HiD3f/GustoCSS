import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { DemoHeroComponent } from './pages/demo-hero/demo-hero.component';
import { DemoButtonsComponent } from './pages/demo-buttons/demo-buttons.component';
import { DemoProductComponent } from './pages/demo-product/demo-product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ParcoursStepComponent } from './pages/parcours-step/parcours-step.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    DemoHeroComponent,
    DemoButtonsComponent,
    DemoProductComponent,
    SidebarComponent,
    ParcoursStepComponent,
    ParcoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
