import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObtenerApiService } from '../servicios/obtener-api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  nombre : any;
  apellido : any;
  nombreCompleto: any;
  fechaActual : any;
  obtenerData : any [] = [];
  datos : any;



  constructor(private activatedRoute : ActivatedRoute,public _services : ObtenerApiService) { 
    this._services.obtenerData<any[]>("").subscribe(data =>{
      this.obtenerData = data;
    })

  }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get("nombreCompleto")
    this.apellido = this.activatedRoute.snapshot.paramMap.get("apellido")
    this.nombreCompleto = this.nombre.toString() + " " + this.apellido.toString();

    this.fechaActual = new Date().toLocaleDateString();
  }

  

  
  
  
}
