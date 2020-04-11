import { ChangeDetectionStrategy, Component, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {

    @ViewChild('content') private container: TemplateRef<any>;

    constructor(
      private vcr: ViewContainerRef,
    ) {
    }

    public ngOnDestroy(): void {
        this.vcr.createEmbeddedView(this.container);
    }
  
}
