import { Component, OnInit, Input } from '@angular/core';

//importing chat services
import { PubsubService } from 'src/app/core/services/post/pubsub.service';

@Component({
  selector: 'app-text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.scss'],
})
export class TextMessageComponent implements OnInit {

  @Input() orgId = '';

  chatMessage = '';

  constructor(
    public pubsubService: PubsubService,
  ) { }

  uploadMessage(chatMessage) {

    const chat = chatMessage;
    this.pubsubService.sendMessage(chat, this.orgId);
    this.chatMessage = '';
  }

  ngOnInit() { }

}
