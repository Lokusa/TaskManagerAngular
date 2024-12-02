import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'home', component:HomeComponent},
  { path: 'create-task', component:CreateTaskComponent},
  { path: 'edit-task/:id', component:EditTaskComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
