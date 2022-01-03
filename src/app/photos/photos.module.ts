import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    //exports: [  ], //para permitir que componentes externos enxerguem o componente atual
    imports: [
      //HttpClientModule,  //para requisição à API
      //CommonModule,  // Módulo do BrowserModule para herdar appModule
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
    ]
})

export class PhotosModule {}
