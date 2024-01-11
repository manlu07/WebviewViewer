import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { credentials } from '../credentials';

import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,public ngFireAuth: AngularFireAuth) { }
  credentials = [...credentials];
  user = {
    email: '',
    password: '',
  }

  ngOnInit() {
  }


  async login() {
    try {
      const userCredential = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
      console.log(userCredential); // For debugging purposes
  
      if (userCredential.user) {
        // User exists, navigate to the home page
        this.router.navigate(['/home']);
      } else {
        // Handle scenario where the user property is unexpectedly null
        alert('Login failed!');
      }
    } catch (error) {
      // Handle authentication errors
      console.error('Error occurred during sign-in:', error);
      alert('Login failed!');
    }
  }
  async register() {
    try {
      const userCredential = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      console.log(userCredential); // For debugging purposes
  
      if (userCredential.user) {
        // User exists, navigate to the home page
        alert('registration successful');
      } else {
        // Handle scenario where the user property is unexpectedly null
        alert('registration failed!');
      }
    } catch (error) {
      // Handle authentication errors
      console.error('Error occurred during sign-in:', error);
      alert('registration failed!');
    }
  }
  }
