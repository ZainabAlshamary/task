import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });


  constructor(
    private router: Router,
  ) {
      }
  get f() {
    return this.loginForm.controls;
  }
  ngOnInit(): void {}
  login() {
      let data = this.loginForm.value;
     sessionStorage.setItem(environment.authtoken,"tokenn")
this.router.navigate(['website/statistics'])

  }


}
