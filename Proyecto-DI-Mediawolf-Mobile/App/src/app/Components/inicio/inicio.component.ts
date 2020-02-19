import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  username:string;
  password:string;
  constructor(private user:UserService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null||localStorage.getItem('token')!=undefined){
      this.router.navigate(['/lista']);
    }
  }
  
  LogIn(){
    let userlog={
      "username":this.username,
      "password":this.password
    };
    console.log(userlog);
    this.user.loginUser(userlog);
  }
}
