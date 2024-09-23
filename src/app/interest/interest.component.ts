import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
  interests = [
    { name: 'Fisica', icon: 'https://firebasestorage.googleapis.com/v0/b/isaiasja-myapi.appspot.com/o/fisica.png?alt=media&token=9b4d82cb-ed7f-4337-a1ac-1c05b21c1619' },
    { name: 'Sustentabilidad', icon: 'https://firebasestorage.googleapis.com/v0/b/isaiasja-myapi.appspot.com/o/sostenibilidad.png?alt=media&token=083910a2-e2ba-4195-909b-4d2f358ec541' },
    { name: 'Videojuegos', icon: 'https://firebasestorage.googleapis.com/v0/b/isaiasja-myapi.appspot.com/o/juegos2.png?alt=media&token=46cb103a-7890-4cae-abf1-07e563b1ecce' },
    { name: 'AI', icon: 'https://firebasestorage.googleapis.com/v0/b/isaiasja-myapi.appspot.com/o/ai.png?alt=media&token=c80423e3-75f1-461f-982f-ab4e07dfb9f6' }
  ];
}
