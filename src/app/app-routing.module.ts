import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';  // Import the About Us component
import { HeaderComponent } from './header/header.component';  // Import the Header component if needed

const routes: Routes = [

  
  { path: 'about-us', component: AboutUsComponent },  // Define the About Us route

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
