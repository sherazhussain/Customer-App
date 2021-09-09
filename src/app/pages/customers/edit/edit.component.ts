import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
   
  id :Number=0;
  header: string = ''
  
  customer: any = {
      CustomerId: null,
      Name: '',
      Age: null,
      Gender: '',
      Street: '',
      Postcode: '',
      HouseNumber: null

    }

  constructor(private router: Router,private activateRoute: ActivatedRoute, private customerService: CustomerService ) { }

  ngOnInit(): void {
   

    this.activateRoute.queryParams.subscribe(data => {
      this.id = Number(data.id)
    })
    
    this.header = this.id=== 0 ? 'Add Employee' : 'Edit Employee' 
    if(this.id != 0) {
      this.customer = this.customerService.onGetCustomer(this.id);
      
    }
  }

  onSubmit(form: NgForm) {

    let customer: any = {
      CustomerId: form.value.CustomerId,
      Name: form.value.Name,
      Age: form.value.Age,
      Gender: form.value.Gender,
      Street: form.value.Street,
      Postcode: form.value.Postcode,
      HouseNumber: form.value.HouseNumber,
      
    }

    if(this.id === 0){
      this.customerService.onAdd(customer);
    }
    else {
      this.customerService.onUpdate(customer);
      
    }
  
    this.router.navigateByUrl('')
  }


}
