import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CustomersComponent, CustomerService } from './customer/index';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[CustomersComponent],
    providers:[HTTP_PROVIDERS]         
})

export class AppComponent { 
    title = 'Customer App';
    name = "Andre";
    nameColor = 'red';
    customers = [
      {id:1, name:"Andre"},  
      {id:1, name:"India"},  
      {id:1, name:"Annuetta"},  
      {id:1, name:"Alyssa"},  
    ];

    changeColor = function(){
        if(this.nameColor === 'red')
            this.nameColor = 'blue'
        else
            this.nameColor = 'red'
    };
}
