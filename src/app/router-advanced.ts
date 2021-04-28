import { Compiler, Injector, NgModuleFactoryLoader, Type } from '@angular/core';
import {
  ChildrenOutletContexts,
  NavigationExtras,
  Route,
  Router,
  Routes,
  UrlSerializer,
  UrlTree,
} from '@angular/router';
import { Location } from '@angular/common';

export class RouterAdvanced extends Router {
  constructor(
    rootComponentType: Type<any>,
    urlSerializer: UrlSerializer,
    rootContexts: ChildrenOutletContexts,
    location: Location,
    injector: Injector,
    loader: NgModuleFactoryLoader,
    compiler: Compiler,
    config: Routes
  ) {
    super(
      rootComponentType,
      urlSerializer,
      rootContexts,
      location,
      injector,
      loader,
      compiler,
      config
    );
  }

  navigateByUrl(
    url: string | UrlTree,
    extras: NavigationExtras = {
      skipLocationChange: true,
    }
  ): Promise<boolean> {
    const modifiedExtras: NavigationExtras = {
      ...extras,
      skipLocationChange: true,
    };
    return super.navigateByUrl(url, modifiedExtras);
  }
}

function flatten<T>(arr: T[][]): T[] {
  return Array.prototype.concat.apply([], arr);
}

export function routerFactory(
  rootComponentType: Type<any>,
  urlSerializer: UrlSerializer,
  rootContexts: ChildrenOutletContexts,
  location: Location,
  injector: Injector,
  loader: NgModuleFactoryLoader,
  compiler: Compiler,
  config: Route[][]
): Router {
  return new RouterAdvanced(
    rootComponentType,
    urlSerializer,
    rootContexts,
    location,
    injector,
    loader,
    compiler,
    flatten(config)
  );
}
