import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { DemoComponent } from './layout/demo/demo.component';
import { FooterComponent } from './layout/footer/footer.component';
import { JobsComponent } from './layout/jobs/jobs.component';
import { PricingComponent } from './layout/pricing/pricing.component';
import { SigninComponent } from './layout/signin/signin.component';
import { SignupComponent } from './layout/signup/signup.component';
import { SolutionsComponent } from './layout/solutions/solutions.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  {
    component:HomeComponent,
    path:'home'
   },
   {
    component:DemoComponent,
    path:'demo'
   },
   {
    component:JobsComponent,
    path:'jobs'
   },
   {
    component:PricingComponent,
    path:'pricing'
   },
   {
    component:SigninComponent,
    path:'signin'
   },
   {
    component:SignupComponent,
    path:'signup'
   },
   {
    component:SolutionsComponent,
    path:'solutions'
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
