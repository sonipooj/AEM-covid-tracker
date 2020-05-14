import { Component } from '@angular/core';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import { AEMResponsiveGridComponent, AEMContainerComponent, MapTo } from '@adobe/cq-angular-editable-components';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corona-tracker';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en','fr','de']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|de|fr/) ? browserLang : 'en');
    ModelManager.initialize();
  }
}
MapTo('wknd-events/components/structure/app')(AEMContainerComponent);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);