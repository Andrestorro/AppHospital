import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoLoguinGuard } from './guards/no-loguin.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'users', loadChildren: './pages/users/users.module#UsersPageModule' },
  { path: 'consultation', loadChildren: './pages/consultation/consultation.module#ConsultationPageModule' },
  { path: 'results', loadChildren: './pages/results/results.module#ResultsPageModule' },
  { path: 'loguin', loadChildren: './pages/loguin/loguin.module#LoguinPageModule', canActivate:[NoLoguinGuard] },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule', canActivate:[NoLoguinGuard] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
