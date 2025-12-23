import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() activePage: string = 'home';
  @Output() pageChange = new EventEmitter<string>();

  switchPage(page: string, event: Event) {
    event.preventDefault();
    this.pageChange.emit(page);
  }
}
