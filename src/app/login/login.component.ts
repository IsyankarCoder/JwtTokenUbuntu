import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { LoginModel } from '../interfaces/login.model';
import {AuthenticatedResponse} from '../interfaces/authenticatedresponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean=false;
  credentials:LoginModel = {
    username:'',
    password:''
  };

  constructor(private router:Router, private http: HttpClient)
  {

  }

  login(form:NgForm){

     if(form.valid){
     this.http.post<AuthenticatedResponse>("https://localhost:5001/api/auth/login",this.credentials,{
      headers:new HttpHeaders({"Content-Type" : "application/json"})
     })
     .subscribe({
       next:(response:AuthenticatedResponse)=>{
        const token =response.token;
        localStorage.setItem("jwt",token);
        this.invalidLogin=false;
        this.router.navigate(["/"]);
       },
       error: (err:HttpErrorResponse) =>this.invalidLogin=true
     })
    }
  }

  ngOnInit(): void {
  }

}
