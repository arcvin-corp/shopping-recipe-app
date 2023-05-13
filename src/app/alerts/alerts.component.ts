import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alert, AlertLevels } from '../shared/alerts.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent {
  @Input() alert: Alert;
  alertLevels = AlertLevels;
  @Output() closeAlertEvent = new EventEmitter<void>();

  getLogLevelClass(): string {
    switch (this.alert.level) {
      case AlertLevels.INFO:
        return 'bg-info';
      case AlertLevels.WARN:
        return 'bg-warning';
      case AlertLevels.ERROR:
        return 'bg-danger text-light';
      case AlertLevels.DEBUG:
        return 'bg-secondary text-light';
      default:
        return '';
    }
  }

  onCloseClick() {
    this.closeAlertEvent.emit();
  }
}
