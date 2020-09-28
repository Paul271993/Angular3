import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudades: Ciudad[] 
  ciudad: Ciudad 
 
  //   {nCiudad: "Madrid", nPais: "España", codigo: "3F2F"},
  //   {nCiudad: "Chapala", nPais: "Mexico", codigo: "3F4G"},
  //   {nCiudad: "Ludus", nPais: "Rumania", codigo: "R4F9"}
  // ]
  

  constructor() {

  this.ciudades = [
    new Ciudad ("Madrid", "España", "3F2F"),
    new Ciudad ("Chapala", "Mexico", "E8F7"),
    new Ciudad ("Ludus", "Rumania", "K8C2")

  ]

  }

  enviar(nuevaCiudad:HTMLInputElement,nuevoPais:HTMLInputElement,nuevoCodigo:HTMLInputElement){
    this.ciudad= new Ciudad (nuevaCiudad.value,nuevoPais.value,nuevoCodigo.value)
   this.ciudades.push(this.ciudad)
   console.log( this.ciudades);
  }


  ngOnInit(): void {
  }

}
