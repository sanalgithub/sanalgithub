import { Component, OnInit, } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { UnprocessedComponent } from '../unprocessed/unprocessed.component';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-newleads',
  templateUrl: './newleads.component.html',
  styleUrls: ['./newleads.component.css']
})
export class NewleadsComponent implements OnInit {
  public fname: string = '';
  public lname:string='';
  public email:any='';
  public phno:any='';


  

  
  constructor(private myserviceService: MyserviceService){
    
  }

  onSubmit() {
    
    this.myserviceService.publishData(this.fname);
    this.myserviceService.publishData(this.lname);
    this.myserviceService.publishData(this.email);
    this.myserviceService.publishData(this.phno);
    
  }
 

  ngOnInit() {
  }
  
}


   



  

  
