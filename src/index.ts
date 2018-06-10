import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { Ng2Move } from './ng2move.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

 
export * from './ng2move.directive';
 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ng2Move
  ],
  exports: [
    Ng2Move
  ]
})
export class InteractJSModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InteractJSModule,
      providers: []
    };
  }
}
