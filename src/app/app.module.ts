import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import {AboutMeComponent} from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ResumeComponent } from './resume/resume.component';


const appRoutes: Routes = [
  { path: 'app-about-me', component: AboutMeComponent},
  { path: 'my-projects', component: MyProjectsComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ContactComponent,
    FooterComponent,
    ResumeComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,

    // Material Modules in './modules/material/material.module'
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
