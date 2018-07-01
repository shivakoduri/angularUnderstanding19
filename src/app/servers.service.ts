import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";


@Injectable()
export class ServersService {

  constructor(private http: Http){}

  storeServers(servers: any[]){
    // const headers = new Headers({'Content-Type': 'application/json'});
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('https://ng-http-understanding.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://ng-http-understanding.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }

  // getServers(){
  //   return this.http.get('https://ng-http-understanding.firebaseio.com/data')
  //     .pipe(map(
  //       (response: Response) => {
  //         const data = response.json();
  //         // for(const server of data){
  //         //   server.name= 'FETCHED_' + server.name;
  //         // }
  //         return data;
  //       }
  //     ))
  //     .catch(
  //       (error:Response) => {
  //         console.log(error);
  //         return Observable.throw(error);
  //       }
  //     );
  // }

  getServers() {
    return this.http.get('https://ng-http-understanding.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          // console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
  }

  getAppName(){
    return this.http.get('https://ng-http-understanding.firebaseio.com/appName.json')
      .map(
        (response:Response)=>{
          return response.json();
        }
      );
  }
}
