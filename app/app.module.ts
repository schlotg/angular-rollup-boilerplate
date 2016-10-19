import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/helloWorld';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {enableProdMode} from '@angular/core';

if (ENV === 'production'){
  enableProdMode();
}

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }