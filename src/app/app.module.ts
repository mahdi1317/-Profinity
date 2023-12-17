import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { SolutionsComponent } from './layout/solutions/solutions.component';
import { PricingComponent } from './layout/pricing/pricing.component';
import { JobsComponent } from './layout/jobs/jobs.component';

import { SigninComponent } from './layout/signin/signin.component';
import { DemoComponent } from './layout/demo/demo.component';
import { SignupComponent } from './layout/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SolutionsComponent,
    PricingComponent,
    JobsComponent,
    
    SigninComponent,
    DemoComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
