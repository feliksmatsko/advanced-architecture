import { AlarmItem } from './alarm-item';
import { AlarmSeverity } from './value-objects/alarm-severity';

export class Alarm {
  public name: string;
  public severity: AlarmSeverity;
  public triggeredAt: Date;
  public isAcknowledged = false;
  public items = new Array<AlarmItem>();

  constructor(public id: string) {}

  acknowledge() {
    this.isAcknowledged = true;
  }

  addAlarmItem(item: AlarmItem) {
    this.items.push(item);
  }

  toPlainObject() {
    return {
      id: this.id,
      name: this.name,
      severity: this.severity.value,
      triggeredAt: this.triggeredAt,
      isAcknowledged: this.isAcknowledged,
      items: this.items.map(item => item.toPlainObject())
    };
  }
}
