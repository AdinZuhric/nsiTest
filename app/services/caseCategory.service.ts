import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CaseCategory } from '../pages/caseCategory/caseCategory.model';

@Injectable()
export class CaseCategoryService {
  private readonly _url: string;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this._url = environment.serverUrl + '/api/admin/caseCategory';
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getCaseCategories(): Observable<any> {
   // return this.http.get('http://localhost:59738/api/hearings/');
    return this.http.get(this._url);
  }
  getCaseCategoryById(id: number): Observable<any>{
    //return this.http.get('http://localhost:59738/api/hearings'+"/"+id);
    
        return this.http.get(this._url + "/" + id);
      }

      postCaseCategory(caseCategory: CaseCategory): Observable<any> {
        const body = JSON.stringify(caseCategory);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(`${this._url}`, body, {headers: headers});
        
    
      }  

      /*postHearing(hearing: Hearing): Observable<any> {
        /*const body = JSON.stringify(hearing);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(`http://localhost:59738/api/hearings`, body, {headers: headers});*/
        
       /* //const body = JSON.stringify(caseCategory);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        //return this.http.post(`${this._url}`, body, {headers: headers});
        const body=JSON.stringify({
          "address1": "string25",
          "address2": "string5",
          "city": "string",
          "zipCode": "string",
          "dateCreated": "2017-12-17T15:01:56.043Z",
          "dateModified": "2017-12-17T15:01:56.043Z",
          "isDeleted": true,
          "addressTypeId": 1,
          "createdByUserId": 1
        });
        
        return this.http.put(`http://localhost:59738/api/address/22`, body, {headers: headers});
    
      }*/


      putCaseCategory(id: number, caseCategory:CaseCategory): Observable<any>{
        let body = JSON.stringify(caseCategory);
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
    
        return this.http.put(this._url+'/'+ id, body, {headers:headers});
      }
      
      

      deleteCaseCategory(id:number): Observable<any> {
        //const body = JSON.stringify(hearing);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.delete(`${this._url}/api/admin/caseCategory` + id,{headers:headers});
        
      }
   

}
