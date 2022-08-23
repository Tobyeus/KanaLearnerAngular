import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGridComponent } from './components/pages/card-grid/card-grid.component';
import { SelectionComponent } from './components/pages/selection/selection.component';

const routes: Routes = [
  { path:'', component: SelectionComponent},
  { path: 'quiz', component: CardGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
