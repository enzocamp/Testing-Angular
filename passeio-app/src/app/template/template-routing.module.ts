import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: 
    [
      {
        path:'categorias',
        loadChildren: () => import('../categorias/categorias.module').then(m => m.CategoriasModule) // aqui passa o categoria como filho do layout, sera renderizado no html do pai na tag <router-outlet>
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
