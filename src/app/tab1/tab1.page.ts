import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC123"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "ABC123"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "ABC123"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Hernandez",
      "matricula": "ABC123"
    }
  ]

  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";
  


  agregarAlumno(): void {
     var  nuevoAlumno: any = {
       "nombre": this.nombre,
       "apellido": this.apellido,
       "matricula": this.matricula
     }

     this.alumnos.push(nuevoAlumno)
  }
}
