import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
