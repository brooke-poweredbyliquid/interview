import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { BsouzaRoutingModule } from './bsouza-routing.module'
import { BsouzaComponent } from './bsouza/bsouza.component'

@NgModule({
    declarations: [BsouzaComponent],
    imports: [
        BsouzaRoutingModule,
        CommonModule,
    ],
})
export class BsouzaModule { }
