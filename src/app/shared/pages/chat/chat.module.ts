import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';

import { FileSenderComponent } from '../../components/file-sender/file-sender.component';

import { GamingModalComponent } from '../../components/gaming-modal/gaming-modal.component';
import { TextMessageComponent } from '../../components/text-message/text-message.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChatPageRoutingModule,
  ],
  declarations: [
    ChatPage,
    FileSenderComponent,
    GamingModalComponent,
    TextMessageComponent
  ],
  providers: [
  ]
})
export class ChatPageModule { }
