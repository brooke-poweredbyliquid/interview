import { Component, Input, OnInit } from '@angular/core';

import { LiquidApiService } from './../../core/liquid-api.service';
import { Address } from './../../models/address.model';

@Component({
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  @Input() countryToSearch: string = '';
  addresses: Address[];
  searchInvoked: boolean;
  haveErrors: boolean;
  errorMessage: string;

  constructor(private backend: LiquidApiService) { }

  ngOnInit(): void {
  }

  onSearchClick(event: Event): void {
    this.backend.getAddresses({ countryName: this.countryToSearch })
      .subscribe(
        data => {
          this.addresses = data;
          this.searchInvoked = true;
        },
        err => {
          if (err.status === 404) {
            this.searchInvoked = true;
            this.addresses = null;
          } else {
            this.haveErrors = true;
            this.errorMessage = err.message;
          }
        },
      );
  }

  onInputChange(event: Event): void {
    this.searchInvoked = false;
  }

  onDismissError(): void {
    this.haveErrors = false;
    this.errorMessage = '';
  }

}
