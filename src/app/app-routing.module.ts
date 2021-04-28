import {
  ApplicationRef,
  Compiler,
  Injector,
  NgModule,
  NgModuleFactoryLoader,
} from '@angular/core';
import { Location } from '@angular/common';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { VillainListComponent } from './villain-list/villain-list.component';

import {
  ChildrenOutletContexts,
  Router,
  RouterModule,
  Routes,
  ROUTES,
  UrlSerializer,
} from '@angular/router';
import { routerFactory } from './router-advanced';

const routes: Routes = [
  { path: 'villain-list', component: VillainListComponent },
  { path: 'heroes-list', component: HeroesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: Router,
      useFactory: routerFactory,
      deps: [
        ApplicationRef,
        UrlSerializer,
        ChildrenOutletContexts,
        Location,
        Injector,
        NgModuleFactoryLoader,
        Compiler,
        ROUTES,
      ],
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
