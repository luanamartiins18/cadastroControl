import { environment } from './environment';
import { OnInit } from '@angular/core';

export class SettingsComponent implements OnInit {

  environmentIsProduction: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.environmentIsProduction = environment.production;
    console.warn('Environment is PRODUCTION: ' + environment.production);
  }

}