export class Lead {
   fname
   lname
   email
   phno
   
   constructor(formData:{fname,lname,mobile,email,rating,comment}){
this.fname=formData.fname,
this.lname=formData.lname,
this.email=formData.email,
this.phno=formData.mobile

   }
}