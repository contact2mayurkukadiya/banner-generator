import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChooseSizeComponent } from './choose-size/choose-size.component';
import { LabledIconButtonComponent } from './shared/labled-icon-button/labled-icon-button.component';
import { PropertySliderComponent } from './shared/property-slider/property-slider.component';
import { GeneratorExperimentComponent } from './generator-experiment/generator-experiment.component';
import { GradientPickerComponent } from './shared/gradient-picker/gradient-picker.component';
import { CircularAngleControlComponent } from './shared/circular-angle-control/circular-angle-control.component';
import { ButtonGeneratorComponent } from './button-generator/button-generator.component';
import { IconButtonGeneratorComponent } from './icon-button-generator/icon-button-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ChooseSizeComponent,
    LabledIconButtonComponent,
    PropertySliderComponent,
    GeneratorExperimentComponent,
    GradientPickerComponent,
    CircularAngleControlComponent,
    ButtonGeneratorComponent,
    IconButtonGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
