import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iconouser',
  templateUrl: './iconouser.component.html',
  styleUrls: ['./iconouser.component.scss'],
})
export class IconouserComponent implements OnInit {

  constructor(private router:Router) { }
  iconoUser;
  ngOnInit() {
    this.iconoUser= JSON.parse(localStorage.getItem('icono'));
    console.log(this.iconoUser);

  }
ajustes(){
  this.router.navigate(['/ajustes']);

}
}
