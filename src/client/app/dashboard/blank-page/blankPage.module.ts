import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blankPage.component';
import { CarouselModule,TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule, CarouselModule,TypeaheadModule],
    declarations: [BlankPageComponent],
    exports: [BlankPageComponent]
})

export class BlankPageModule { }
