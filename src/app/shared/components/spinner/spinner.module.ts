import { NgModule } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { SpinnerComponent } from './spinner.componetn';



@NgModule({
  imports: [NzSpinModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
