import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private fname: string = '';
  private lname: string = '';
  private email: any = '';
  private phno:any=''

  constructor() { }

  publishData(fname,lname,email,phno) {
    this.fname = fname;
    this.lname=lname;
    this.email=email;
    this.phno=phno;

  }

  getData() {
    return this.fname;
    return this.lname;
    return this.email;
    return this.phno; 
  }
}
