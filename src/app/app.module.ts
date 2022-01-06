import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { CentreContentComponent } from './template/centre-content/centre-content.component';
import { LeftContentComponent } from './template/left-content/left-content.component';
import { RightContentComponent } from './template/right-content/right-content.component';
import { HorMenuModule } from './lib/hormenu/hormenu.module';
import { VerMenuModule } from './lib/vermenu/vermenu.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from './module/breadcrumb/breadcrumb.module';
import { BootstrapModule } from './module/bootstrap/bootstrap.module';
import { TricksComponent } from './component/tricks/tricks.component';
import { routes } from './app-routing.array';
import { ChildcreateComponent } from './component/allerlei/childcreate/childcreate.component';
import { HomeComponent } from './component/standaard/home/home.component';
import { PageNotFoundComponent } from './component/standaard/page-not-found/page-not-found.component';
import { DezeSiteComponent } from './component/deze-site/deze-site.component';
import { StagingComponent } from './component/staging/staging.component';
import { AboutComponent } from './component/standaard/about/about.component';
import { RoutingTestComponent } from './component/allerlei/routing-test/routing-test.component';
import { FormTestModule} from './module/form-test/form-test.module';

@NgModule({
  declarations: [
    AppComponent,
    TricksComponent,
    HeaderComponent,
    FooterComponent,
    CentreContentComponent,
    LeftContentComponent,
    RightContentComponent,
    ChildcreateComponent,
    StagingComponent,
    AboutComponent,
    HomeComponent,
    DezeSiteComponent,
    PageNotFoundComponent,
    RoutingTestComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BootstrapModule,
    BreadcrumbModule,
    HorMenuModule,
    VerMenuModule,
    RouterModule.forRoot(routes),
    FormTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
