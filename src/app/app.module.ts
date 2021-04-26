import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


//HTTP Modules
import { HttpClientModule } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';


import { MaterialModule } from './components/template/material/material.module';


import { AppComponent } from './app.component';


import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { TaskFormComponent } from './components/template/task-form/task-form.component';
import { ListFormComponent } from './components/template/list-form/list-form.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskFormComponent,
    ListFormComponent,
     
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    
    
 
 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
