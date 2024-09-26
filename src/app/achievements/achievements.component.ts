import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements: Array<any> = [];

  ngOnInit(): void {
    let achievement1 = {
      fecha: "2026",
      alcance: "Graduación",
      ubicacion: "Facultad de Negocios y Tecnologías",
      logros: [
        {
          descripcion: "Graduación de Ingeniería de Software"
        }
      ]
    };

    this.achievements.push(achievement1); // Agregamos el logro al array
  }
}
