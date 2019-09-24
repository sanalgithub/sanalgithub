import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewleadsComponent } from './newleads/newleads.component';
import { UnprocessedComponent } from './unprocessed/unprocessed.component';
import { QualifiedComponent } from './qualified/qualified.component';
import { DisqualifiedComponent } from './disqualified/disqualified.component';
import { FollowupleadsComponent } from './followupleads/followupleads.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';


 



@NgModule({
  declarations: [
    AppComponent,
    
    NewleadsComponent,
    UnprocessedComponent,
    QualifiedComponent,
    DisqualifiedComponent,
    FollowupleadsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,AngularFontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
