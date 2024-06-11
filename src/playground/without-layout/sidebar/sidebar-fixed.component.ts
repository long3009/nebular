import { Component } from '@angular/core';
import { NbSidebarService } from '@long3009/nebular-theme';

@Component({
  selector: 'nb-sidebar-fixed',
  templateUrl: './sidebar-fixed.component.html',
})

export class SidebarFixedComponent {

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle();
  }
}
