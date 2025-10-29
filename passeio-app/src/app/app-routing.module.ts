import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'paginas', // quando acessa /paginas, sera acessado o template module e o que tiver nela
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)//aqui ele carrega tudo que declararmos em nosso module
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
