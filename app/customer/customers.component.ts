import { Component, Input, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
    constructor() { }
    @Input() customers:any;
    @Input() customerColor:string;

    ngOnInit() { }

}