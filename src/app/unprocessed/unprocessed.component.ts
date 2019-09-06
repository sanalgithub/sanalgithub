import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-unprocessed',
  templateUrl: './unprocessed.component.html',
  styleUrls: ['./unprocessed.component.css']
})
export class UnprocessedComponent implements OnInit {

  constructor( private myserviceService: MyserviceService) {}
 

  ngOnInit() {

   const fname = this.myserviceService.getData();
   console.log(fname);
  }

}
