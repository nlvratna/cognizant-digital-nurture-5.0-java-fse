import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  providers: [NotificationService],
  templateUrl: 'notification.html',
  styleUrls: ['notification.css'],
})
export class Notification {
  constructor(public notificationService: NotificationService) {}
}
