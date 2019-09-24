import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { Lead } from '../lead';


@Component({
  selector: 'app-unprocessed',
  templateUrl: './unprocessed.component.html',
  styleUrls: ['./unprocessed.component.css']
})
export class UnprocessedComponent implements OnInit {
  splice: any;
 
  
  

  constructor( private myserviceService: MyserviceService) {}
 
  lead:Lead[]

  ngOnInit() {

    this.lead = this.myserviceService.getData();
    console.log(this.lead)
 
  }

  //to delete the rows//
clearAll(i){
  this.lead.splice(i,1)
  //to dispaly after rows deleted//
  localStorage.setItem('leads',JSON.stringify(this.lead))
}
}


