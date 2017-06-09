import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Image } from './Image';

@Injectable()
export class ImageService {
 private baseUrl: string = 'https://shielded-lake-62809.herokuapp.com';
  constructor(private http : Http) {
  }

  getImagesAll(id:any): Observable<Image[]> {
    console.log('Entering getAll');
    let image$ = this.http
      .get(`${this.baseUrl}/soDetails/`+id+`/soImagesDtls`, {headers: this.getHeaders()})
      .map(mapImages).catch(handleError);
    console.log('Leaving getImagesAll');
    return image$;
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

function mapImages(response:Response): Image[] {
   // The response of the API has a results
   // property with the actual results
   return response.json()._embedded.soImagesDtls.map(toImage);
}

function toImage(r:any): Image {
  let image = <Image>({
    soImage: r.soImage,
    //soCitySelf: r._links.self.href
  });
  //console.log('Parsed Image:', Image);
  return image;
}


