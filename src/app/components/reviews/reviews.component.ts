import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Добавьте если используете routerLink

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterModule], // Добавьте RouterModule если используете routerLink
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  // Пример данных отзывов
  reviews = [
    { 
      id: 1, 
      name: 'Иван Петров', 
      age: 35, 
      doctor: 'Алексеев М.П.', 
      date: '15.12.2023', 
      verified: true, 
      rating: 5, 
      text: 'Отличный сервис! Все быстро и качественно. Врач очень внимательный, объяснил все процедуры.' 
    },
    { 
      id: 2, 
      name: 'Мария Сидорова', 
      age: 42, 
      doctor: 'Кузнецова О.И.', 
      date: '10.12.2023', 
      verified: false, 
      rating: 4, 
      text: 'Очень довольна работой. Рекомендую! Качественное лечение и внимательный персонал.' 
    },
    { 
      id: 3, 
      name: 'Алексей Иванов', 
      age: 28, 
      doctor: 'Смирнов А.В.', 
      date: '05.12.2023', 
      verified: true, 
      rating: 5, 
      text: 'Профессиональный подход и отличный результат. Безболезненно и эффективно.' 
    }
  ];

  // Метод для получения звезд рейтинга
  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? '★' : '☆');
    }
    return stars;
  }

  // Метод для навигации
  navigateToContacts() {
    // Логика перехода на страницу контактов
    // Например: this.router.navigate(['/contacts']);
    // Или используйте событие для AppComponent
    console.log('Переход к странице контактов');
  }
}
