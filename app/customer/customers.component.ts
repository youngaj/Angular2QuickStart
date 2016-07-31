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
    @Input() customers:any[];
    @Input() customerColor:string;

    ngOnInit() { 
        this._customerService.getCustomers()
                             .then((customerResponse) => { this.customers = customerResponse})
                             .catch((err) => {
                                console.log(err) //show pretty message to users
                            });

        // this.customers = this._customerService.getCustomers()
        //                     .catch((err) => {
        //                         console.log(err) //show pretty message to users
        //                     });
        
        // this.customers = this._customerService.getCustomers()
        //                     .catch((err) => {
        //                         console.log(err) //show pretty message to users
        //                         return Observable.of((true)); //eats the error
        //                     });
    }

}