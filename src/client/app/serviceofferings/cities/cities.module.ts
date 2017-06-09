import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CarouselModule, TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CityService } from './cities.service';
import { CityComponent } from './cities.component';
import { LocationComponent } from './locations.component';
import { SelSODetailModule } from './selectedsodetail/selsodetail.module';

@NgModule({
    imports: [CommonModule, CarouselModule, TypeaheadModule, 
    FormsModule, DropdownModule, SelSODetailModule, RouterModule],
    declarations: [CityComponent],
    exports: [CityComponent],
 	providers: [CityService]
})

export class CityModule { }
