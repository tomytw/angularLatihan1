import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tomy';

  hasil = 0

  title = ''
  pattern = []

  maxVal = 0
  counterA = 0
  counterB = 0

  leftStr = ''
  rightStr = ''
  newStr = ''

  i = 0
  j = 0
  hitung(varA,varB){
    this.hasil = Math.pow(varA,varB);
    if(this.hasil % 2 == 0){
      this.title = 'Pola B';
      this.pattern = [];

      for(this.i = varB; this.i<=this.hasil + 1;this.i++){
        this.newStr = ""
        for(this.j = 0;this.j<this.i;this.j++){
          this.newStr += "*"
        }

        this.pattern.push(this.newStr);
      }
    }
    else{
      this.title = 'Pola A';
      this.pattern = [];

      this.maxVal = 0;
      if(varA >= varB){
        this.maxVal = varA;
      }
      else{
        this.maxVal = varB;
      }

      this.i = 0;
      this.j = 0;

      this.counterA = 1;
      this.counterB = varB;
      for(this.i = 0; this.i<this.maxVal ; this.i++){
        this.newStr = ''
        this.leftStr = ''
        this.rightStr = ''

        for(this.j = 0;this.j<this.counterB;this.j++){
          this.leftStr = this.leftStr + "*"
        }

        if(this.counterA <= varA){

          for(this.j = 0;this.j<this.counterA;this.j++){
            this.rightStr = this.rightStr + "o"
          }
          this.counterA++;
        }
        this.counterB--;
        this.newStr = this.leftStr + this.rightStr;
        this.pattern.push(this.newStr);
      }
    }
  }
}
