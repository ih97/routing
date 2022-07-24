import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './p/home/home.component';

import { WorksComponent } from './p/works/works.component';
import { CenzorComponent } from './p/works/cenzor/cenzor.component';
import { UserlistComponent } from './p/works/userlist/userlist.component';
import { TasklistComponent } from './p/works/tasklist/tasklist.component';


const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{ path:'home',component: HomeComponent},
{ path:'works',component: WorksComponent},

{ path:'works',component: WorksComponent,children:[
  { path:'cenzor',component: CenzorComponent},
  { path:'userlist',component: UserlistComponent},
  { path:'tasklist',component: TasklistComponent},
] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
