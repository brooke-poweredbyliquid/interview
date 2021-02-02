import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BsouzaComponent } from './bsouza.component'

describe('BsouzaComponent', () => {

    let component: BsouzaComponent
    let fixture: ComponentFixture<BsouzaComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BsouzaComponent],
        })
            .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(BsouzaComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
