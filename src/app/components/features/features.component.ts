import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    {
      icon: '🔬',
      title: 'Современная диагностика',
      description: 'Используем оборудование экспертного класса для точной диагностики'
    },
    {
      icon: '👩‍⚕️',
      title: 'Опытные врачи',
      description: 'Специалисты с опытом работы более 10 лет'
    },
    {
      icon: '💖',
      title: 'Индивидуальный подход',
      description: 'Подбираем методы обследования и лечения для каждого пациента'
    }
  ];
}
