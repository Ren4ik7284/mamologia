import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Output() navigateToContacts = new EventEmitter<void>();

  goToContacts() {
    this.navigateToContacts.emit();
  }
}
