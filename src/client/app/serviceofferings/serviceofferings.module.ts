import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CityModule } from './cities/cities.module';
import { ServiceOfferingsComponent } from './serviceofferings.component';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	CityModule
    ],
    declarations: [ServiceOfferingsComponent],
    exports: [ServiceOfferingsComponent]
})

export class ServiceOfferingsModule { }
