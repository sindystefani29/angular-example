import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormService } from './form.service';
import { FormComponent } from './form/form.component';
import { HeroesChildComponent } from './heroes/heroes-child.component';
import { HeroesComponent } from './heroes/heroes-parent.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeroesComponent,
    HeroesChildComponent,
    PipeExampleComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
