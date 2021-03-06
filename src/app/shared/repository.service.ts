import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  // Constructor
  constructor(private http: HttpClient) { }

  // GET API: api/[route]
  // getRepoApi function
  public getRepoApi = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  // POST API: api/[route]
  // createRepoApi function
  public createRepoApi = (route: string, body) => {
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }

  // PUT API: api/[route]
  // updateRepoApi function
  public updateRepoApi = (route: string, body) => {
    return this.http.put(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }

  // DELETE API: api/[route]
  // deleteRepoApi function
  public deleteRepoApi = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, environment.urlAddress));
  }

  // createCompleteRoute private helper function
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  // generateHeaders private helper function
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
}
