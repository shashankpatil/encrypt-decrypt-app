import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AesAlgorithm } from './aes.security';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: string;
  aes: AesAlgorithm;

  constructor() {
    this.encryptMode = true;
    this.aes = new AesAlgorithm();
  }

  changeMode() {
    this.encryptMode = this.encryptMode ? false : true;
    this.textToConvert = "";
  }

  convertText() {
    if (this.textToConvert.trim() === "" || this.password.trim() === "") {
      this.conversionOutput = "Please fill the textboxes."
      return;
    }
    else {
      if (this.encryptMode) {
        this.conversionOutput = this.aes.encrypt(this.textToConvert.trim(), this.password.trim());
      }
      else {
        this.conversionOutput = this.aes.decrypt(this.textToConvert.trim(), this.password.trim());
      }
    }
  }
}
