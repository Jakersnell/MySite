import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { PhonePipe } from '../../pipes/phone.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, PhonePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  env = environment;
}
