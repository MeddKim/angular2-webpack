import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

//使用 RouterModule.forRoot 方法，导出包含了路由数组的 routing 常量。它返回一个 配置好的路由模块 ，它将被加入到根 NgModule - AppModule 中。
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


//属性值组
