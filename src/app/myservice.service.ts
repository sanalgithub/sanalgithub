import { Injectable } from '@angular/core';
import { Lead } from './lead';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  leadArray:Lead[]=[]

  private fname: string = '';
  private lname: string = '';
  private email: any = '';
  private phno:any='';

  constructor() { }

  publishData(lead) {
    
   
    this.leadArray=JSON.parse(localStorage.getItem('leads'))||[]
    console.log('lead array',this.leadArray)
    this.leadArray.push(lead)
    

    localStorage.setItem('leads',JSON.stringify(this.leadArray))

  }

  getData() {
   return JSON.parse(localStorage.getItem('leads'))
 
  }
}

