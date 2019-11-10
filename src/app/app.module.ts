import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SimpleTransitionComponent } from './simple-transition/simple-transition.component';
import { HomeComponent } from './home/home.component';
import { SlidingPanelComponent } from './sliding-panel/sliding-panel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'simple_transition',
    component: SimpleTransitionComponent,
    pathMatch: 'full'
  },
  {
    path: 'sliding_panel',
    component: SlidingPanelComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleTransitionComponent,
    HomeComponent,
    SlidingPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
