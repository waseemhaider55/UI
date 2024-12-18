import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrialModule } from '../matrial/matrial.module'; // Keeping typo as is
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageSideNavComponent } from './components/page-side-nav/page-side-nav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PageSideNavComponent,
    PageNotFoundComponent // Added PageNotFoundComponent to declarations
  ],
  imports: [
    CommonModule,
    MatrialModule, // Keeping typo as is
    RouterModule
  ],
  exports: [
    CommonModule,
    MatrialModule, // Keeping typo as is
    PageHeaderComponent,
    PageFooterComponent,
    PageSideNavComponent,
    RouterModule,
    PageNotFoundComponent // Ensured PageNotFoundComponent is exported
  ]
})
export class SharedModule { }
