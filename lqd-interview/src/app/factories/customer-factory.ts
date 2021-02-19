import { Address } from '../models/address.model';
import { Customer } from '../models/customer.model';
import { Customer as CustomerResponse } from '../models/responses/customer.model';

import { CustomerSearch } from './../models/customer-search.model';
import { SearchCustomer } from './../models/requests/search-customer.model';
import { Address as AddressResponse } from './../models/responses/address.model';

export class CustomerFactory {
  createCustomerSearch(customer: SearchCustomer): CustomerSearch {
    return {
      fullName: `${customer.firstName} ${customer.lastName}`,
    };
  }

  createCustomer(customer: CustomerResponse): Customer {
    return {
      id: customer.id,
      fullName: `${customer.firstName} ${customer.lastName}`,
      emailAddress: customer.emailAddress,
    };
  }

  createAddress(address: AddressResponse): Address {
    return {
      id: address.id,
      description: `${address.city}, ${address.stateOrProvince}, ${address.country} ${address.postalCode}`,
      line1: address.line1,
      line2: address.line2,
    };
  }
}
