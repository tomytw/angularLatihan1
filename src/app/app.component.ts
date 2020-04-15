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
  hitung(varA,varB){
    this.hasil = Math.pow(varA,varB);
    if(this.hasil % 2 == 0){
      this.title = 'Pola B';
      this.pattern = [];

      for(var i = varB; i<=this.hasil + 1;i++){
        var newStr = new Array(i).join('*');
        this.pattern.push(newStr);
      }

      this.pattern.shift();
    }
    else{
      this.title = 'Pola A';

      for
    }
  }
}
