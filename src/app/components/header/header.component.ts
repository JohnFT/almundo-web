import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown } from 'src/app/modules/shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menu', [transition(':enter', [useAnimation(fadeInDown)])])
  ]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
