import { Component, Input, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers:[CustomerService],
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
    constructor(private _customerService:CustomerService) {

     }
    @Input() customers:any;
    @Input() customerColor:string;

    ngOnInit() { 
        this.customers = this._customerService.getCustomer();
    }

}