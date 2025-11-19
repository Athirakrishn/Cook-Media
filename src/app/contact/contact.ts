import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [Footer, Header,RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
