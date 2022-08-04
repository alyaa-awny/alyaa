import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
  email:new FormControl('',[
    Validators.required,
  ]),

  password:new FormControl('',[
    Validators.required,
  ])

  })


  constructor(private _user:UserService, private _route:Router) { }

  ngOnInit(): void {
  }


  onLogin(){
   console.log("test")
    if(this.loginForm.valid){
      this._user.login(this.loginForm.value)
      .subscribe(res=>console.log(res)        
      , 
       (err)=>{console.log(err.error.data)},
       ()=>{  this.loginForm.reset()
        this._route.navigate(["/"])
      }
        
        
        )
    }
  }


}
