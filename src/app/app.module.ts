import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ltMenuModule } from './lib/menu/menu.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BreadcrumbModule } from './lib/breadcrumb/breadcrumb.module';
import { GridContainerModule } from './lib/grid-container/grid-container.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ltMenuModule,
     BreadcrumbModule,
     GridContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
