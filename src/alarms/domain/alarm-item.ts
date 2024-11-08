export class AlarmItem {
  constructor(
    public id: string,
    public name: string,
    public type: string,
  ) {}

  toPlainObject() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
    };
  }
}
