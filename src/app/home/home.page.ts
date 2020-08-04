import { Component } from '@angular/core';
import {
  Plugins, 
  PushNotification,
  PushNotificationToken,
  PushNotificstionActionPerformed
} from '@capacitor/core';
const {PushNotifications} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
