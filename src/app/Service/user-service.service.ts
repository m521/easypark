import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const API_URL ="http://localhost:8380/SpringMvc/users/";
const API_URL_VOITURE ="http://localhost:8380/SpringMvc/";

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private Http:HttpClient) { 
    
  }
  create(user:any): Observable<any>{
    return this.Http.post(API_URL+"add-user", user);
  }

  get():Observable<any>{
    return this.Http.get(API_URL+"retrieve-allUsers");
  }

  delete(id:number) : Observable<any>{
    return this.Http.delete(API_URL+"delete-user/"+id)
  }

  modify(user:any) : Observable<any>{
    return this.Http.put(API_URL+"/Modify-user",user);
  }

  AjoutVoiture(data : any){
    return this.Http.post(API_URL_VOITURE + "add-voiture",data);
  }

}

