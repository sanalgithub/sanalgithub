import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Crm1Component } from './crm1/crm1.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewleadsComponent } from './newleads/newleads.component';
import { UnprocessedComponent } from './unprocessed/unprocessed.component';
import { QualifiedComponent } from './qualified/qualified.component';
import { DisqualifiedComponent } from './disqualified/disqualified.component';
import { FollowupleadsComponent } from './followupleads/followupleads.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Crm1Component,
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
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
