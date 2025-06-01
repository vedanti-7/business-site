import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost/php/angular/rudra/src/app/submit.php', this.contactForm.value)
        .subscribe(response => {
          console.log('Form submitted successfully!', 'color: green; font-weight: bold;',response);
        }, error => {
          console.error('Error submitting form', error);
        });
    }
  }
   
}
