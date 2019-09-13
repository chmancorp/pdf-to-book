import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultiFileUploadPage } from './multi-file-upload.page';

const routes: Routes = [
  {
    path: '',
    component: MultiFileUploadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MultiFileUploadPage]
})
export class MultiFileUploadPageModule {}
