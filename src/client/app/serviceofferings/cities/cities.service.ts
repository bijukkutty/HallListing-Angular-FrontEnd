import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { City } from './City';
import { Location } from './Location';
import { Detail } from './Detail';

@Injectable()
export class CityService {
 private baseUrl: string = 'https://shielded-lake-62809.herokuapp.com';
 //private baseUrl: string = 'http://localhost:8080';
  constructor(private http : Http) {
  }

  getAll(): Observable<City[]> {
    console.log('Entering getAll');
    let city$ = this.http
      .get(`${this.baseUrl}/soStates/1/soCities`, {headers: this.getHeaders()})
      .map(mapCities).catch(handleError);
    console.log('Leaving getAll');
    return city$;
  }

  getLocationsAll(e:any): Observable<Location[]> {
  console.log('Entering getLocationsAll-->'+e);
  let location$ = this.http
    .get(e, {headers: this.getHeaders()})
    .map(mapLocations).catch(handleError);
  return location$;
}

  getDetailsAll(e:any): Observable<Detail[]> {
  let detail$ = this.http
    .get(e, {headers: this.getHeaders()})
    .map(mapDetails).catch(handleError);
  return detail$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated 
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`;
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

function mapCities(response:Response): City[] {
   // The response of the API has a results
   // property with the actual results
   return response.json()._embedded.soCities.map(toCity);
}

function toCity(r:any): City {
  let city = <City>({
    soCityName: r.soCityName,
    soCitySelf: r._links.self.href
  });
  console.log('Parsed City:', city);
  return city;
}

function mapLocations(response:Response): Location[] {
   // property with the actual results
   return response.json()._embedded.soLocations.map(toLocation);
}
   // The response of the API has a results

function toLocation(r:any): Location {
  let loc = <Location>({
    soLocationName:r.soLocationName,
    soLocationSelf: r._links.self.href
  });
  console.log('location:', r.soLocationName);
  return loc;
}

function mapDetails(response:Response): Detail[] {
   // property with the actual results
   return response.json()._embedded.soDetails.map(toDetail);
}
   // The response of the API has a results

function toDetail(r:any): Detail {
  let detail = <Detail>({
    soDetailPropertyName:r.soPropertyName,
    soDetailPropertyTagline:r.soPropertyTagline,
    soDetailPropertyAddr:r.soPropertyAddr,
    soDetailImage:r.soPrimaryImage,
    soDetailSelf: r._links.self.href
  });
  console.log('Detail:', detail.soDetailPropertyName);
  return detail;
}
