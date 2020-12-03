// Importar modulos de router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ComercioComponent } from './components/comercio/comercio.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelComponent } from './components/panel/panel.component';
import { AutenticacionService } from './services/autenticacion';
import { MicomercioComponent } from './components/micomercio/micomercio.component';
import { MicomerciosComponent } from './components/micomercios/micomercios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';

// Array de rutas
const appRoute: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'comercio', component: ComercioComponent},
    {path: 'comercio/:comercio', component: ProductosComponent},
    {path: 'comercio/:comercio/:categoria', component: ProductosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'panel/:usuario', component: PanelComponent, canActivate: [AutenticacionService],children:[
        {path: '', component: MicomerciosComponent, outlet: 'panel'},
        {path: 'perfil', component: PerfilComponent, outlet: 'panel'},
        {path: 'minegocio/:negocio', component: MicomercioComponent, outlet: 'panel'},
        {path: 'lista-pedidos/:negocio', component: ListaPedidosComponent, outlet: 'panel',}
    ]},
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoute);