import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule,  HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contactme',
  imports: [ FormsModule, HttpClientModule],
  templateUrl: './contactme.html',
  styleUrl: './contactme.css'
})

export class Contactme{
  name = '';
  email = '';
  message = '';
  password = 'Muttal'; 

  constructor(private http: HttpClient) {}

 onSubmit() {
  const params = new HttpParams().set('password', this.password);
  this.http.get('https://www.myportfolioapisecuring.somee.com/api/Home/GetGAccessKey', { params, responseType: 'text' })
    .subscribe({
      next: (accessKey: string) => {
        this.submitForm(accessKey);
      },
      error: (err) => {
        console.error('Failed to get access key', err);
        alert('Failed to get access key');
      }
    });
}

  submitForm(accessKey: string) {
    // Create a form dynamically and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://api.web3forms.com/submit';

    const inputs = {
      access_key: accessKey,
      name: this.name,
      email: this.email,
      message: this.message
    };

    for (const key in inputs) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = (inputs as any)[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  }
}
