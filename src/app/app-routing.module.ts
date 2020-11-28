import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskOneComponent } from './taskOne/taskOne.component';


const routes: Routes = [
  { path: "", redirectTo: "task1", pathMatch: "full" },
  { path: "task1", component: TaskOneComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
