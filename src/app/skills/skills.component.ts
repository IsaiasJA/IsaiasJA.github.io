import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[] = [
    'Pruebas de software',
    'Creatividad',
    'Persistencia',
    'Desarrollo full-stack',
    'Refactorización de código',
    'Control de calidad del software',
    'Despliegue en la nube',
    'Escalabilidad y rendimiento',
    'Desarrollo orientado a pruebas',
    'Seguridad informática',
  ];
}