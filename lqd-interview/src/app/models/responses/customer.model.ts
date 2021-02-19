import { Address } from './address.model';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  address: Address;
}
