import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomer(){
        return [
            {id:1, name:"Andre Young"},  
            {id:1, name:"India Young"},  
            {id:1, name:"Annuetta Young"},  
            {id:1, name:"Alyssa Young"},  
        ];
    }
}