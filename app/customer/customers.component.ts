import { Component, Input, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

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
    @Input() customers:Observable<any[]>;
    @Input() customerColor:string;

    ngOnInit() { 
        this.customers = this._customerService.getCustomer();
    }

}