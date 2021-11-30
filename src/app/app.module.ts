import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
// import { CursusMenuModule } from './cursusmenu/cursusmenu.module';
import { FormsModule } from '@angular/forms';
import { TestAreaComponent } from './test-area/test-area.component'
@NgModule({
  declarations: [
    AppComponent,
    TestAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule
    // CursusMenuModule
    // ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
