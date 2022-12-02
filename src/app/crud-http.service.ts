import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {

  apiUrl: string = 'http://localhost:3000/salas';
  apiUsuario: string = 'http://localhost:3000/usuario';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  link:string = 'http://localhost:3000/usuario?salaId=';
  sala:string = 'http://localhost:3000/salas?id=';
  usuario:string = 'http://localhost:3000/usuario?id=';


  constructor(private http: HttpClient) { }

  // Create
  create(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Read
  list() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Update
  update(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }


    // Update
    updateuser(id: any, data: any): Observable<any> {
      let API_URL = `${this.apiUsuario}/${id}`;
      return this.http.put(API_URL, data, { headers: this.headers }).pipe(
        catchError(this.handleError)
      )
    }


  // Delete
  delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };



  createuser(data: any): Observable<any> {
    let API_URL = `${this.apiUsuario}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  links:string=''

  listusers(id: any) {
    this.links=this.link+id
    return this.http.get(`${this.links}`);
    
  }
 

  ususariosgeneral(){
    return this.http.get(`${this.apiUsuario}`);
  }

  deleteusuario(id: any): Observable<any> {
    var API_URL = `${this.apiUsuario}/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }

  salas:string=''
  datossala(id:any): Observable<any>{
    this.salas=this.sala+id
    return this.http.get(`${this.salas}`);
  }

  users:string=''
  datosuser(id:any): Observable<any>{
    this.users=this.usuario+id
    return this.http.get(`${this.users}`);
  }
}
