import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { City } from './City';
import { Location } from './Location';
import { Detail } from './Detail';
import { CityService } from './cities.service';


@Component({
	moduleId: module.id,
	selector: 'cities-cmp',
	templateUrl: './so-dash.component.html'
})

export class CityComponent {
	/* Carousel Variable */
	resultCities: Array<City>;
	resultLocations: Array<Location>;
	resultDetails: Array<Detail>;
	myInterval: number = 1000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`];

	public selectedCity: City;
	public selectedLocation: Location;
	public selectedLocationName: string = '';
	public asyncSelected: string = '';
	public selectedCityDD: any = 'Select City';
	//private router: Router;

	public typeaheadLoading: boolean = false;
	public typeaheadNoResults: boolean = false;

	public detailImageBase64: string = '';

	// Dropdown 
	public disabled: boolean = false;
	public ddstatus: boolean = false;
	public items: Array<string> = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];

	constructor(private _cityService: CityService, private router: Router) {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

	ngOnInit() {
		this._cityService.getAll().subscribe(resultCities => this.resultCities = resultCities);
	}
	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy1 ', 'Dummy2 ', 'Dummy3 ', 'Dummy4 '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}


	public changeTypeaheadLoading(e: boolean): void {
		this.typeaheadLoading = e;
	}

	public changeTypeaheadNoResults(e: boolean): void {
		this.typeaheadNoResults = e;
	}

	public typeaheadOnSelect(e: any): void {
		this.selectedLocation = e.item;
		this.selectedLocationName = this.selectedLocation.soLocationName;
		this._cityService.getDetailsAll(e.item.soLocationSelf + "/soDetails").
			subscribe(resultDetails => this.resultDetails = resultDetails);
	}

	// Dropdown
	public toggled(open: boolean): void {
		console.log('Dropdown is now: ', open);
	}

	public toggleDropdown($event: MouseEvent): void {
		$event.preventDefault();
		$event.stopPropagation();
		this.ddstatus = !this.ddstatus;
	}
	public processDDSelection(e: any): void {
		console.log(`Selected value: ` + e.soCitySelf);
		this.selectedCityDD = e.soCityName;
		this._cityService.getLocationsAll(e.soCitySelf + "/soLocations").
			subscribe(resultLocations => this.resultLocations = resultLocations);
	}

	public redirectToSelectionPage(e: any): void {
		var id = this.getID(e.soDetailSelf);
		this.router.navigate(['./serviceofferings/selsodetail'], { queryParams: { selid: id } });

	}

	public getID(r: any): String {
		var strID = r.substring(r.lastIndexOf("/") + 1);
		return strID;
	}

}
