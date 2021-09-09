import { Injectable } from '@angular/core';
import { Customer } from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer[] = [
    {  
      CustomerId: 1,
        Name: 'Sheraz Hussain',
        Age: 10,
        Gender: 'Male',
        Street: "St-No-32",
        Postcode: "447400",
        HouseNumber: 5
      },
      {  
        CustomerId: 2,
          Name: 'Hamza',
          Age: 20,
          Gender: 'Male',
          Street: "St-No-39",
          Postcode: "558555",
          HouseNumber: 60
        },
      {  
        CustomerId: 2,
          Name: 'Hamza',
          Age: 20,
          Gender: 'Male',
          Street: "St-No-39",
          Postcode: "558555",
          HouseNumber: 60
        },
      {  
        CustomerId: 2,
          Name: 'Hamza',
          Age: 20,
          Gender: 'Male',
          Street: "St-No-39",
          Postcode: "558555",
          HouseNumber: 60
        },
      {  
        CustomerId: 2,
          Name: 'Hamza',
          Age: 20,
          Gender: 'Male',
          Street: "St-No-39",
          Postcode: "558555",
          HouseNumber: 60
        },
      {  
        CustomerId: 2,
          Name: 'Hamza',
          Age: 20,
          Gender: 'Male',
          Street: "St-No-39",
          Postcode: "558555",
          HouseNumber: 60
        },
        {  
          CustomerId: 3,
            Name: 'Umer',
            Age: 30,
            Gender: 'Male',
            Street: "St-No-78",
            Postcode:"699999",
            HouseNumber: 50
          },
        {  
          CustomerId: 3,
            Name: 'Umer',
            Age: 30,
            Gender: 'Male',
            Street: "St-No-78",
            Postcode:"699999",
            HouseNumber: 50
          },
        {  
          CustomerId: 3,
            Name: 'Umer',
            Age: 30,
            Gender: 'Male',
            Street: "St-No-78",
            Postcode:"699999",
            HouseNumber: 50
          }
    ];
  constructor() { }
  
  onGet() {
    return this.customer;  
  }

  onGetCustomer(id: Number) {
    
    return this.customer.find(x =>  x.CustomerId == id)
  }

  onAdd(customer: any) {
    this.customer.push(customer);
  }

  onDelete(id:Number) {
    let customers:any = this.customer.find(x=>x.CustomerId == id); 
    let index = this.customer.indexOf(customers,0);
    this.customer.splice(index,1);
  }

  onUpdate(Updatecustomer: Customer) {
    let oldCustomer:any = this.customer.find(x => x.CustomerId === Updatecustomer.CustomerId);
    oldCustomer.Name = Updatecustomer.Name;
    oldCustomer.Age = Updatecustomer.Age;
    oldCustomer.Gender = Updatecustomer.Gender;
    oldCustomer.Street = Updatecustomer.Street;
    oldCustomer.Postcode = Updatecustomer.Postcode;
    oldCustomer.HouseNumber = Updatecustomer.HouseNumber;
  }

  onSearch(name:string) {
    let Name:any = this.customer.filter(x => x.Name === name);
    return Name;
  }
}
