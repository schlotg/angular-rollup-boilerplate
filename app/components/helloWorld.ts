import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-pagination-basic',
  templateUrl: './pagination-basic.html'
})
export class NgbdPaginationBasic {
  page = 4;
}

@Component({
  selector: 'app',
  template: `
    <h1>Hello World</h1>
    <i class="fa fa-bell" aria-hidden="true"></i>
    <div>Default pagination</div>
    <ngb-pagination [collectionSize]="70" [(page)]="page"></ngb-pagination>
  `
})

export class AppComponent { }
