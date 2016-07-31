import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';

const URL_CUSTOMER = 'app/customer/customers.json';

@Injectable()
export class CustomerService {

    constructor(private _http:Http) { }

    getCustomers(){
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err) => { 
                console.log(err);
                return Promise.reject(err);
            });
    }

    getCustomers_Observable(){
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err:any){
        console.log(err);
        return Observable.throw(err);
    }
}