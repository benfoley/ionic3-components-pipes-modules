import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { ComponentsModule } from '../../components/components.module'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(Home),
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
