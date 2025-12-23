import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  contacts = [
    {
      icon: '📍',
      title: 'Адрес:',
      details: 'г. Москва, ул. Медицинская, д. 15<br>(м. "Здоровье", 5 минут пешком)'
    },
    {
      icon: '📞',
      title: 'Телефон:',
      details: '+7 (495) 123-45-67<br>+7 (495) 123-45-68'
    },
    {
      icon: '✉️',
      title: 'Email:',
      details: 'info@mammology-center.ru'
    },
    {
      icon: '🕐',
      title: 'Режим работы:',
      details: 'Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br>Вс: 10:00-16:00'
    }
  ];
}
