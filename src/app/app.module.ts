import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    //HomeModule, vai ser importado por lazyloading no arq. de rotas da home
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

// Uma forma de forçar a ajuda do Angular em avisar sobre erros de digitação, etc, é usando interfaces, como o implements do OnInit, por exemplo
// É uma boa prática importar CommonModulo em todo módulo criado pra que fiquem disponíveis as diretivas do Angular
