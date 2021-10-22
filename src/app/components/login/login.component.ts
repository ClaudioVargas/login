import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionToken } from 'src/app/models/sessionToken';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    ) { 
    this.formInit()
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
      // "username": "agilesoft",
      // "password": "agile1234"
    console.log("this.loginForm.value", this.loginForm.value)
    let payload = {
      "username": this.loginForm.value.user,
      "password": this.loginForm.value.password
    }
    this.authService.iniciarSession(payload).subscribe( res =>{
      console.log("res", res)
      let sessionToken: SessionToken = res.data
      sessionStorage.setItem("sesionToken" ,JSON.stringify( sessionToken) )
      this.router.navigate(['/home/']);
      
    })
  }

  formInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}






