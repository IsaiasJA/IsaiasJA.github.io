import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience: Array<any> = [];
  ngOnInit(): void {
    let work1 = {
      fecha: "2018-2022",
      ubicacion: "Ixtac, Ver.",
      puesto: "CEO",
      empresa: "Waves Lab",
      logros: [
        {
          descripcion: "Construcción de un ERP en la nube de google"
        },
        { descripcion: "Creacion de un cluster en hadoop y spark" }
      ]
    };

    let work2 = {
      fecha: "2018-2022",
      ubicacion: "Orizaba Ver.",
      puesto: "Developer",
      empresa: "Kubeet",
      logros: [
        {
          descripcion: "Creación de invernadero hidroptico"
        },
        { descripcion: "Creacion de un dron autonomo" }
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }
}
