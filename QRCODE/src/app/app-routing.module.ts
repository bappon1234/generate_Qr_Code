import { RouterModule, Routes } from '@angular/router';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';

import { NgModule } from '@angular/core';
import { ImageGeneratorComponent } from './image-generator/image-generator.component';

export const routes: Routes = [
    {path:'qrcode', component:QrcodeGeneratorComponent},
    {path:'imageQr', component:ImageGeneratorComponent},
    {path:'', redirectTo:'qrcode', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)
    ],

})

export  class AppRoutingModule { }

