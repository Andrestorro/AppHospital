import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoguinGuard } from '../guards/loguin.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: '../pages/users/users.module#UsersPageModule',
            canActivate: [LoguinGuard]
          }
        ]
      },
      {
        path: 'consultation',
        children: [
          {
            path: '',
            loadChildren: '../pages/consultation/consultation.module#ConsultationPageModule',
            canActivate: [LoguinGuard]
          }
        ]
      },
      {
        path: 'results',
        children: [
          {
            path: '',
            loadChildren: '../pages/results/results.module#ResultsPageModule',
            canActivate: [LoguinGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/user',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
