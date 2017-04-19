import { Component } from '@angular/core'


@Component({
  selector: 'word',
  templateUrl: 'word.html'
})
export class Word {

  text: string;

  constructor() {
    console.log('Hello Word Component')
    this.text = 'memememememe'
  }

}
