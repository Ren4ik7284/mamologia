import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  appointmentForm: FormGroup;
  formMessage: string = '';
  showMessage: boolean = false;
  messageType: 'success' | 'error' = 'success';

  services = [
    { value: 'consultation', label: 'Консультация маммолога' },
    { value: 'uzi', label: 'УЗИ молочных желез' },
    { value: 'mammography', label: 'Маммография' },
    { value: 'biopsy', label: 'Пункционная биопсия' },
    { value: 'treatment', label: 'Лечение мастопатии' },
    { value: 'observation', label: 'Наблюдение после операции' },
    { value: 'augmentation', label: 'Увеличение груди' },
    { value: 'reduction', label: 'Уменьшение груди' },
    { value: 'implants', label: 'Покупка имплантов' },
    { value: 'other', label: 'Другое' }
  ];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        this.noWhitespaceValidator,
        this.noOnlySpacesValidator
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/),
        this.phoneValidator
      ]],
      service: ['consultation'],
      date: [''],
      message: ['']
    });

    const today = new Date().toISOString().split('T')[0];
    this.appointmentForm.get('date')?.setValue(today);
  }

  // Кастомный валидатор: запрет пробелов
  private noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.includes(' ')) {
      return { whitespace: 'Пробелы не допускаются' };
    }
    return null;
  }

  // Кастомный валидатор: не только пробелы
  private noOnlySpacesValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.trim().length === 0) {
      return { onlySpaces: 'Поле не может содержать только пробелы' };
    }
    return null;
  }

  // Кастомный валидатор для телефона
  private phoneValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    
    // Убираем все пробелы, дефисы и скобки для проверки
    const cleanedPhone = control.value.replace(/[\s\-()]/g, '');
    
    // Проверяем длину и начало номера
    if (cleanedPhone.length < 11) {
      return { phoneLength: 'Номер телефона слишком короткий' };
    }
    
    // Проверяем начинается ли номер правильно
    if (!cleanedPhone.match(/^(\+7|8|7)/)) {
      return { phoneFormat: 'Номер должен начинаться с +7, 8 или 7' };
    }
    
    return null;
  }

  // Метод для очистки ввода от лишних пробелов
  private cleanInput(value: string): string {
    return value ? value.trim().replace(/\s+/g, ' ') : '';
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      // Очищаем данные перед отправкой
      const formData = {
        name: this.cleanInput(this.appointmentForm.get('name')?.value),
        phone: this.cleanInput(this.appointmentForm.get('phone')?.value).replace(/\s+/g, ''),
        service: this.appointmentForm.get('service')?.value,
        date: this.appointmentForm.get('date')?.value,
        message: this.cleanInput(this.appointmentForm.get('message')?.value)
      };

      console.log('Form submitted:', formData);
      this.showFormMessage('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
      
      // Сбрасываем форму
      this.appointmentForm.reset();
      this.appointmentForm.get('service')?.setValue('consultation');
      
      const today = new Date().toISOString().split('T')[0];
      this.appointmentForm.get('date')?.setValue(today);
    } else {
      this.showFormMessage('Пожалуйста, заполните все обязательные поля правильно', 'error');
      this.markAllAsTouched();
    }
  }

  private showFormMessage(text: string, type: 'success' | 'error') {
    this.formMessage = text;
    this.messageType = type;
    this.showMessage = true;
    
    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }

  // Помечаем все поля как touched чтобы показать ошибки
  private markAllAsTouched() {
    Object.keys(this.appointmentForm.controls).forEach(key => {
      const control = this.appointmentForm.get(key);
      control?.markAsTouched();
    });
  }

  // Геттер для удобного доступа к полям формы в шаблоне
  get name() { return this.appointmentForm.get('name'); }
  get phone() { return this.appointmentForm.get('phone'); }
}
