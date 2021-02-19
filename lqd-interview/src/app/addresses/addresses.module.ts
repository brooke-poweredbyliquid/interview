import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses/addresses.component';

@NgModule({
  declarations: [AddressesComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddressesRoutingModule,
  ],
})
export class AddressesModule { }
