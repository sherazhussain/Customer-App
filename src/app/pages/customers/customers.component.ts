import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../service/customer.service";
import { Customer } from "../../model/customer.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  customerss: Customer[] = [];
  SearchResult:any = []
  
  constructor(private router: Router,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerss = this.customerService.onGet();
    
  }

  routeEdit(data:any) {
    this.router.navigate(['/customer'], {
      queryParams: { id: data.CustomerId }
    });
  }

  routeAdd (data: any) {
    this.router.navigate(['/customer'], {
      queryParams: { id: data },
    });
  }

  onDelete(id:Number) {
    this.customerService.onDelete(id);
  }

  onSearch($event:any) {
    this.SearchResult = this.customerService.onSearch($event.target.value);
  }

}
