import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StandingsdashboardComponent } from './components/standingsdashboard/standingsdashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LinkrenderComponent } from './components/linkrender/linkrender.component';
import { FixtureTeamDetailsComponent } from './components/fixture-team-details/fixture-team-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    AgGridModule,
    RouterModule.forRoot([
      { path: '', component: StandingsdashboardComponent },
      { path: 'standings', component: StandingsdashboardComponent },
      { path: 'teams/:teamId', component: FixtureTeamDetailsComponent },
    ]),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    StandingsdashboardComponent,
    LinkrenderComponent,
    FixtureTeamDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
