import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'utsav',10000,"JAVA"),
   new Employee(1,'rohit',20000,"Angular"),
   new Employee(3,'rahul',20000,"JAVA"),
   new Employee(4,'Priyanshu',20000,"Angular"),
   new Employee(5,'Kislaya',20000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}