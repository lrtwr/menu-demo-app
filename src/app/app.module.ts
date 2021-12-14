import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HorMenuModule } from './lib/hormenu/hormenu.module';
import { VerMenuModule } from './lib/vermenu/vermenu.module';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { CentreContentComponent } from './template/centre-content/centre-content.component';
import { LtBreadcrumbModule } from './lib/breadcrumb/breadcrumb.module';
import { LeftContentComponent } from './template/left-content/left-content.component';
import { RightContentComponent } from './template/right-content/right-content.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from './module/breadcrumb/breadcrumb.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CentreContentComponent,
    LeftContentComponent,
    RightContentComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
     LtBreadcrumbModule,
     AppRoutingModule,
     RouterModule,
     BreadcrumbModule,
     HorMenuModule,
     VerMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
