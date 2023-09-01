import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutineComponent } from './routine/routine.component';

const routes: Routes = [
	{ path: '', component: RoutineComponent, pathMatch: 'full' },
	// { path: 'test-path', component: ShippingComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
