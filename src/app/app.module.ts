import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/home/home.component';
import { ComercioComponent } from './components/comercio/comercio.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { DatosService } from './services/datos.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { FormsModule } from '@angular/forms';
import { AutenticacionService } from './services/autenticacion';
import { MicomercioComponent } from './components/micomercio/micomercio.component';
import { NuevoproductoComponent } from './components/nuevoproducto/nuevoproducto.component';
import { MicomerciosComponent } from './components/micomercios/micomercios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaService } from './services/categoria.service';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    ProductosComponent,
    ContainerComponent,
    HomeComponent,
    ComercioComponent,
    PedidoComponent,
    CartComponent,
    LoginComponent,
    PanelComponent,
    MicomercioComponent,
    NuevoproductoComponent,
    MicomerciosComponent,
    PerfilComponent,
    ListaPedidosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [appRoutingProviders,DatosService,AutenticacionService,CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
  }
}
