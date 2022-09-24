import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private nombreCompleto;
  
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: ''
  };  

  
  constructor() { 
    
  }

  ngOnInit() {
  }

  registrar(event : any){
    this.nombreCompleto = this.usuario.nombre.toString()+ " " + this.usuario.apellido.toString();
    console.log(this.nombreCompleto);
  }

}
