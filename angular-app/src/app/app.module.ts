import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpaAngularEditableComponentsModule } from '@adobe/cq-angular-editable-components';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { GetdataService } from './services/getdata.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};
export function HttpLoaderFactory(http: HttpClient){
return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SpaAngularEditableComponentsModule,
    PerfectScrollbarModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule {}
