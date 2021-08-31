import { Component } from '@angular/core';

@Component({
  selector: 'app-spin',
  template: `<div class="spin">
    <nz-spin nzSimple nzSize='large'></nz-spin>
    </div>
  `,
  styles: [
    `
      .spin {
        text-align: center;
        margin-top: 150px;
      }
    `
  ]
})
export class SpinnerComponent {}