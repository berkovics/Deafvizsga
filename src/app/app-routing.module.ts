import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SzabalyComponent } from './szabaly/szabaly.component';
import { VizsgalatComponent } from './vizsgalat/vizsgalat.component';
import { BelepesComponent } from './belepes/belepes.component';
import { RegisztalComponent } from './regisztal/regisztal.component';
import { AudiogramComponent } from './audiogram/audiogram.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { ShopComponent } from './shop/shop.component';
import { ShopKarbantartasComponent } from './shop-karbantartas/shop-karbantartas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'szabaly', component: SzabalyComponent},
  {path: 'vizsgalat', component: VizsgalatComponent},
  {path: 'belepes', component: BelepesComponent},
  {path: 'regisztal', component: RegisztalComponent},
  {path: 'audiogram', component: AudiogramComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'varify-email', component: VarifyEmailComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shopkarbantartas', component: ShopKarbantartasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
