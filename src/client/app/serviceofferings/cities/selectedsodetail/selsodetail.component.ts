import { Component, ViewChild } from '@angular/core';
import { ImageService } from './selsodetail.service';
import { Image } from './Image';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'selsodet-cmp',
    templateUrl: './selsodetailview.html'
})

export class SelSoDetailComponent {
    resultImages: Array<Image>;
    myId: any;
    @ViewChild('childModal') public childModal: ModalDirective;
    constructor(private _imageService: ImageService, private route: ActivatedRoute,
        private router: Router, private location: Location) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            // Defaults to 0 if no query param provided.
            this.myId = params['selid'];
        });
        this._imageService.getImagesAll(this.myId).subscribe(resultImages => this.resultImages = resultImages);
    }

    public btnClick() {
        //this.router.navigateByUrl('/serviceofferings/landingpage');
        this.location.back();
    };
}
