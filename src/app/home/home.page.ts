import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products = [...products];

  constructor(private router: Router) {}
  logout(){
    this.router.navigate(['/login'])
  }
  share(){
    window.alert('The product has been shared!');
  }

}
