import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
// import { Data,Data2 } from './data';
// import { DATA,DATA2 } from './mock-data';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  getData(): Observable<any> {


        return this.http.get('./assets/data/data.json')
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getNumbers(): Observable<any> {


        return this.http.get('./assets/data/numbers.json')
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
