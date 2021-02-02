import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BsouzaComponent } from './bsouza/bsouza.component'

const routes: Routes = [
    {
        path: '',
        component: BsouzaComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BsouzaRoutingModule { }
