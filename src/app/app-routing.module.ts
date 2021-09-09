import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from "./pages/customers/customers.component";
import { EditComponent } from './pages/customers/edit/edit.component';

const routes: Routes = [
  { path:"", component: CustomersComponent  },
  { path:"customer", component: EditComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
