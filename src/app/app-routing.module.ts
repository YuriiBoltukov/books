import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'back-office',
    pathMatch: 'full',
  },
  {
    path: 'back-office',
    loadChildren: () =>
      import('./back-office/back-office.routes').then(
        (m) => m.BackOfficeRoutes,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
