import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  dataUser: any;

  constructor(private afAuth: AngularFireAuth, 
    private router: Router) {

    }

    ngOnInit(): void {

    }

    logOut () {
      this.afAuth.signOut().then(() => this.router.navigate(['/login']))
    }

    
    }

