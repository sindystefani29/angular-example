import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormService } from './form.service';
import { FormComponent } from './form/form.component';
import { HeroesChildComponent } from './heroes/heroes-child.component';
import { HeroesComponent } from './heroes/heroes-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeroesComponent,
    HeroesChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
