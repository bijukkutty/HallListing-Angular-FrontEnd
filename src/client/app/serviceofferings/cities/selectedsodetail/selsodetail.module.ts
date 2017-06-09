import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CarouselModule, TypeaheadModule, DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ImageService } from './selsodetail.service';
import { SelSoDetailComponent } from './selsodetail.component';

@NgModule({
    imports: [CommonModule, CarouselModule, TypeaheadModule, FormsModule, 
    DropdownModule, ModalModule],
    declarations: [SelSoDetailComponent],
    exports: [SelSoDetailComponent],
    providers: [ImageService]
})

export class SelSODetailModule { }
