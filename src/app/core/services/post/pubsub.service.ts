import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { Storage } from '@capacitor/storage';

const API_TOKEN = 'my-api-token';
@Injectable({
  providedIn: 'root'
})

export class PubsubService {

  orgId = '';
  apiToken = '';

  constructor() {
    this.loadToken();
  }

  async loadToken() {
    const apiToken = await Storage.get({ key: API_TOKEN });
    if (apiToken && apiToken.value) {
      this.apiToken = apiToken.value;
    }
  }
  //Send messages
  sendMessage(postChat,orgId) {
    console.log('service log:',postChat,orgId);

    //Body
    const body = {
      scope: {
        type: 'organization',
        organization_id: orgId
      },
      payload: {
        event: {
          eventName: 'textMessage',
          data: {
            text: `${postChat}`
          }
        }
      }
    };

    return Http.request({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiToken}`,
      },
      url: 'https://plugins.livestorm.co/api/v1/pub_subs',
      data: JSON.stringify(body)
    }).then(response => {
      console.log(response);
    });
  }


  //Send photos as base64
  sendImages(postImage) {

    //Body
    const body = {
      scope: {
        type: 'organization',
        organization_id: `${this.orgId}`
      },
      payload: {
        event: {
          eventName: 'image',
          data: {
            text: `${postImage}`
          }
        }
      }
    };

    return Http.request({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiToken}`
      },
      url: 'https://plugins.livestorm.co/api/v1/pub_subs',
      data: JSON.stringify(body)
    }).then(response => {
      console.log(response);
    });
  }
}
