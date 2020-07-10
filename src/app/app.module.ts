import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { MiloComponent } from './milo/milo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ChiildComponent} from './parent/child/child.component';
import { ChildDirectDirective } from './parent/directive/child-direct.directive';
import { StructuralDirective } from './parent/directive/structural.directive';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const rout: Routes = [
    {path: '' , component: HomeComponent},
  {path: 'product', component : ProductComponent},
  {path: 'user/:id/:name', component: UserComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'not-found' , component: NotfoundComponent},
  {path: 'regist' , loadChildren: ()=> import('./register/register.module').then(x => x.RegisterModule)},
  {path: 'test/log' ,component: LoginComponent},
  {path: 'milo' , component: MiloComponent},
  {path: 'child' ,component: ChildComponent},
  {path: '**' , redirectTo: '/not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    NotfoundComponent,
    LoginComponent,
    MiloComponent,
    ModalComponent,
    ChildComponent,
    ParentComponent,
    ChiildComponent,
    ChildDirectDirective,
    StructuralDirective,
    NewaccountComponent,
    UserinfoComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(rout),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        SweetAlert2Module.forRoot(),
        BrowserAnimationsModule,
        MatButtonToggleModule
    ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
