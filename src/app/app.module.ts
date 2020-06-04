import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Site } from './core/site/site.service';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
@NgModule({
  imports: [

    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SiteListComponent },
    ]),
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    AvatarModule,
    HttpClientModule,
    MomentModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SiteListComponent,
    SideBarComponent
  ],
  providers: [
    Site
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/