import { Component } from '@angular/core';
import { NbSidebarService } from '@long3009/nebular-theme';

@Component({
  selector: 'nb-layout-subheader',
  templateUrl: './layout-subheader.component.html',
})

export class LayoutSubheaderComponent {

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
