import { NgModule } from "@angular/core"
import { IonicModule } from 'ionic-angular';

import { Word } from './word/word'

@NgModule({
  declarations: [Word],
  exports: [Word],
  imports: [
    IonicModule.forRoot(Word), // required if the custom component uses ion-icon or other funky ionic business
  ]
})
export class ComponentsModule {
}
