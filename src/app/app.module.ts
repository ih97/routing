import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './p/home/home.component';
import { WorksComponent } from './p/works/works.component';
import { CenzorComponent } from './p/works/cenzor/cenzor.component';
import { UserlistComponent } from './p/works/userlist/userlist.component';
import { TasklistComponent } from './p/works/tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
