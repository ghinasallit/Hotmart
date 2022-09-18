import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  constructor() {
  }

  public get f() {
    return this.contactForm.controls;
  }

  public submit(){
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {
  }
}
