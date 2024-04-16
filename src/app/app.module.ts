import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SzabalyComponent } from './szabaly/szabaly.component';
import { VizsgalatComponent } from './vizsgalat/vizsgalat.component';
import { BelepesComponent } from './belepes/belepes.component';
import { RegisztalComponent } from './regisztal/regisztal.component';
import { FormsModule } from '@angular/forms';
import { AudiogramComponent } from './audiogram/audiogram.component';
import { HomeComponent } from './home/home.component';
import { Environment, /*firebaseDatabase*/  } from './environment';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { AuthService } from './auth.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SortPipe } from './sort.pipe';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database/database';
import { ShopKarbantartasComponent } from './shop-karbantartas/shop-karbantartas.component';

@NgModule({
  declarations: [
    AppComponent,
    SzabalyComponent,
    VizsgalatComponent,
    BelepesComponent,
    RegisztalComponent,
    AudiogramComponent,
    HomeComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    ShopComponent,
    UserlistComponent,
    SortPipe,
    ShopKarbantartasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    SweetAlert2Module
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
