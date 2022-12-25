import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TodaysTodoComponent } from './main-dashboard/todays-todo/todays-todo.component';
import { StoreSummaryComponent } from './main-dashboard/store-summary/store-summary.component';
import { OrdersSalesComponent } from './main-dashboard/orders-sales/orders-sales.component';
import { AnalyticsComponent } from './main-dashboard/analytics/analytics.component';
import { TutorialsGuidesComponent } from './main-dashboard/tutorials-guides/tutorials-guides.component';
import { ActionButtonComponent } from './common/action-button/action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainDashboardComponent,
    TodaysTodoComponent,
    StoreSummaryComponent,
    OrdersSalesComponent,
    AnalyticsComponent,
    TutorialsGuidesComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
