import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewleadsComponent } from './newleads/newleads.component';
import { DisqualifiedComponent } from './disqualified/disqualified.component';
import { UnprocessedComponent } from './unprocessed/unprocessed.component';
import { QualifiedComponent } from './qualified/qualified.component';
import { FollowupleadsComponent } from './followupleads/followupleads.component';


const routes: Routes = [
  {path:'newleads',component:NewleadsComponent},
  {path:'disqualified',component:DisqualifiedComponent},
  {path:'unprocessed',component:UnprocessedComponent},
  {path:'qualified',component:QualifiedComponent},
  {path:'followupleads',component:FollowupleadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
