import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'directorios/:clasificacionId/:clasificacion',
    loadChildren: () => import('./pages/directorios/directorios.module').then(m => m.DirectoriosPageModule)
  },
  {
    path: 'links/:servicioId/:servicio',
    loadChildren: () => import('./pages/links/links.module').then(m => m.LinksPageModule)
  },
  {
    path: 'tiendas/:categoriaId/:categoria',
    loadChildren: () => import('./pages/tiendas/tiendas.module').then(m => m.TiendasPageModule)
  },
  {
    path: 'clases/:tiendaId/:tienda/:cerrada/:abre/:cierra/:proximamente',
    loadChildren: () => import('./pages/clases/clases.module').then(m => m.ClasesPageModule)
  },
  {
    path: 'productos/:tiendaId/:tienda/:claseId/:clase/:cerrada/:abre/:cierra/:proximamente',
    loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./pages/detalles/detalles.module').then(m => m.DetallesPageModule)
  },
  {
    path: 'buscar/:tiendaId/:claseId/:clase',
    loadChildren: () => import('./pages/buscar/buscar.module').then(m => m.BuscarPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then(m => m.CarritoPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasPageModule),
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./pages/direcciones/direcciones.module').then(m => m.DireccionesPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terms-of-service/terms-of-service.module').then(m => m.TermsOfServicePageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then(m => m.HistorialPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then(m => m.CuentaPageModule)
  },
  // {
  //   path: 'notificaciones',
  //   loadChildren: () => import('./pages/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
  // },
  {
    path: 'tiendas',
    loadChildren: () => import('./pages/tiendas/tiendas.module').then(m => m.TiendasPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then(m => m.AyudaPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./pages/confirmacion/confirmacion.module').then(m => m.ConfirmacionPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then(m => m.DatosPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
