import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      try {
        await this.contactService.addContactMessage(this.contactForm.value);
        console.log("%cForm submitted successfully!", "color: green; font-weight: bold;");
        this.contactForm.reset();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  }
}