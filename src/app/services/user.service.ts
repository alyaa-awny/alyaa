import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  private apiLink:string = "http://localhost:4242/api/user/"
  public otp = ""
  public isLoggedIn : boolean = false
  public userData:any = null



  constructor(private _http:HttpClient) { }

  register(data:User):Observable<any>{
    return this._http.post(`${this.apiLink}register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}login`,data)
  }

  activateAcc(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}activateAcc`,data)
  }
  me():Observable<any>{
    return this._http.get(`${this.apiLink}me`)
  }
  sendOtp(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}sendOtp`,data)
  }
  changePassword(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}changePassword`,data)
  }
  logoutAll(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}logoutAll`,null)
  }
  all():Observable<any>{
    return this._http.get(`${this.apiLink}all`)
  }
  editPassword(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}editPassword`,data)
  }
  deactivate(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}deactivate`,data)
  }
  delAccount(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}delAccount`,data)
  }
  edit(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}edit`,data)
  }
  changeImage(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}changeImage`,data)
  }
}
