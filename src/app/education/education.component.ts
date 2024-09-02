import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Array<any> = [];
  ngOnInit(): void {
    let education1 = {
      fecha: "2022-2026",
      ubicacion: "Ixtac, Ver.",
      carrera: "Ingenieria de Software",
      facultad: "Negocios y tecnologias",
      logros: [
        {
          descripcion: "Licenciatura en Ingenieria de Software"
        }  
      ]
    }
    this.education.push(education1);
    console.log(this.education);
  }
}
