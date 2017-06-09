import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Country } from './Country';


@Injectable()
export class CountryService {
  private baseUrl: string = 'https://shielded-lake-62809.herokuapp.com';

  constructor(private http : Http) {
  }

  getAll(): Observable<Country[]> {
    console.log('Entering getAll');
    let country$ = this.http
      .get(`${this.baseUrl}/soCountries`, {headers: this.getHeaders()})
      .map(mapCountries).catch(handleError);
      /*let country$ = this.http.get('https://shielded-lake-62809.herokuapp.com/soCountries', {headers: this.getHeaders()})
        .map((data: any) => data.json())
            .subscribe(
                    (data: any) => {
                          mapCountries(data);
        },
    );*/
    console.log('Leaving getAll');
    return country$;
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

/*function mapCountries(data): Country {
    let con = new Country();
    for (let i = 0; i < data._embedded.soCountries.length; i++) {
      console.log(data._embedded.soCountries[i].soCountryName);
    }
    return con;
}

function toCountry(r:any): Country {
  let country = <Country>({
    soCountryName: r.soCountryName,
  });
  console.log('Parsed country:', country);
  return country;
}*/

function mapCountries(response:Response): Country[] {
   // The response of the API has a results
   // property with the actual results
   //country: Country[] = [];
   //this.country = response.json()._embedded.soCountries.map(toCountry);
   //console.log('Parsed Country');
   //var conArray = [];
   //conArray = response.json()._embedded.soCountries.map(toCountry);
   return response.json()._embedded.soCountries.map(toCountry);
}

function toCountry(r:any): Country {
  let con = <Country>({
    soCountryName: r.soCountryName
  });
  console.log('Parsed Country:', con);
  return con;
}
