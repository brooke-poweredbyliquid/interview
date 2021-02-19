import { Component, Input, OnInit } from '@angular/core';

import { LiquidApiService } from './../../core/liquid-api.service';
import { Customer } from './../../models/customer.model';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  @Input() customerToSearch: string = '';
  customer: Customer;
  searchInvoked: boolean;
  haveErrors: boolean;
  errorMessage: string;

  constructor(private backend: LiquidApiService) { }

  ngOnInit(): void {
  }

  onSearchClick(event: Event): void {
    this.backend.searchCustomer({ fullName: this.customerToSearch })
      .subscribe(
        data => {
          this.customer = data;
          this.searchInvoked = true;
        },
        err => {
          if (err.status === 404) {
            this.searchInvoked = true;
            this.customer = null;
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
