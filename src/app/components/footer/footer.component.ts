import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() pageChange = new EventEmitter<string>();

  navigateTo(page: string, event: Event) {
    event.preventDefault();
    this.pageChange.emit(page);
  }
}
