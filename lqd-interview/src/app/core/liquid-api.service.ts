import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CustomerSearch } from '../models/customer-search.model';
import { Address as AddressResponse } from '../models/responses/address.model';
import { Customer as CustomerResponse } from '../models/responses/customer.model';

import { CustomerFactory } from './../factories/customer-factory';
import { AddressSearch } from './../models/address-search.model';
import { Address } from './../models/address.model';
import { Customer } from './../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class LiquidApiService {
  readonly API_BASE: string = 'https://localhost:44368/customers';

  constructor(private http: HttpClient, private factory: CustomerFactory) { }

  searchCustomer(customerSearch: CustomerSearch): Observable<Customer> {
    return this.http.post(
      `${this.API_BASE}/searches`,
      this.factory.createSearchCustomer(customerSearch))
        .pipe(
          map((x: CustomerResponse) => this.factory.createCustomer(x)),
          catchError((err) => {
            this.handleError(err);
            throw err;
          }));
  }

  getAddresses(addressSearch: AddressSearch): Observable<Address[]> {
    return this.http.get(`${this.API_BASE}/addresses/${addressSearch.countryName}/searches`)
        .pipe(map((x: AddressResponse[]) => {
          return x.map(y => this.factory.createAddress(y));
        }));
  }

  private handleError(err: any): void {
    if (err.status === 500) {
      // alert(err.message);
    }
  }

}
