import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseSizeComponent } from './choose-size/choose-size.component';
import { GeneratorExperimentComponent } from './generator-experiment/generator-experiment.component';
import { ButtonGeneratorComponent } from './button-generator/button-generator.component';
import { IconButtonGeneratorComponent } from './icon-button-generator/icon-button-generator.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseSizeComponent
  },
  {
    path: 'generator',
    component: GeneratorExperimentComponent
  },
  {
    path: 'buttonGenerator',
    component: ButtonGeneratorComponent
  },
  {
    path: 'iconButtonGenerator',
    component: IconButtonGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
