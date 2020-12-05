import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // Reactive Forms Module:
  loginForm: FormGroup;

  constructor() { }

  //ngOnInit wykonuje się tylko raz przy tworzeniu komponentu
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required),
      "terms": new FormControl(false, [Validators.required, Validators.requiredTrue])
    });
  }

  onFormSubmit() {
    // console.log(this.loginForm);
    // console.log(this.loginForm.get("email"));

    if (this.loginForm.valid) {
      console.log(this.loginForm.valid);

      //zamarkuj że pole dotknięte i które niepoprawne i formularz nie puści dalej
      this.loginForm.get("email").markAsTouched();
      this.loginForm.get("password").markAsTouched();
      this.loginForm.get("terms").markAsTouched();
    }
    else {
      console.log(this.loginForm.valid);
      this.loginForm.reset();
    }
  }

}
