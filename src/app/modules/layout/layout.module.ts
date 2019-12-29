import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { SettingsbarComponent } from './settingsbar/settingsbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderbarComponent, FooterbarComponent, SettingsbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderbarComponent,
    FooterbarComponent,
    SettingsbarComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
