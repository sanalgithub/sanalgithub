import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UnprocessedComponent } from '../unprocessed/unprocessed.component';
import { MyserviceService } from '../myservice.service';
import { Lead } from '../lead';
@Component({
  selector: 'app-newleads',
  templateUrl: './newleads.component.html',
  styleUrls: ['./newleads.component.css']
})
export class NewleadsComponent implements OnInit {
// create an array named lead,call all the fields , the property of created array is we created .ts file//
  lead: Lead = {
    fname: '',
    lname: '',
    email: '',
    phno: ''

  }

  constructor(private myserviceService: MyserviceService) {

  }

  onSubmit(form) {
    console.log(this.lead)

    this.myserviceService.publishData(this.lead);


  }


ngOnInit() {
}
//this is for reloading the page//
reset(form){

  form.reset()
}
  
}









