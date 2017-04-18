import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { WhatComponent } from './what/what.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { CommentComponent } from './comment/comment.component';
import { WhatPipe } from './what.pipe';
import { JasonPipe } from './jason.pipe';

const ROUTES: Routes = [
    { path: ':dir', component: DirectoryComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        WhatComponent,
        DirectoryComponent,
        HomeComponent,
        ModalComponent,
        CommentComponent,
        CommentComponent,
        DirectoryComponent,
        HomeComponent,
        ModalComponent,
        WhatComponent,
        WhatPipe,
        JasonPipe
    ],
    entryComponents: [ModalComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(ROUTES),
        LazyLoadImageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

