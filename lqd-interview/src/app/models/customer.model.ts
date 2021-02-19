import { Address } from './address.model';

export interface Customer {
  id: string;
  fullName: string;
  emailAddress: string;
  address: Address;
}
