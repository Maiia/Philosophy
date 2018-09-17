import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
