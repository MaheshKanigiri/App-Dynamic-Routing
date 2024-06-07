import { Component, OnInit, ViewChild, ViewContainerRef, EnvironmentInjector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-loader',
  template: '<ng-template #container></ng-template>',
  standalone: true,
  imports: [CommonModule],
})
export class DynamicLoaderComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private injector: EnvironmentInjector
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const component = params['component'];
      this.loadComponent(component);
    });
  }

  loadComponent(component: string) {
    this.container.clear();

    if (component === 'ComponentA') {
      this.container.createComponent(ComponentAComponent, { environmentInjector: this.injector });
    } else if (component === 'ComponentB') {
      this.container.createComponent(ComponentBComponent, { environmentInjector: this.injector });
    }
  }
}
