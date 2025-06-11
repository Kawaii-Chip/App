export default class DeviceInfo {
  private _temperature: number;
  private _humidity: number;

  constructor(temperature: number, humidity: number) {
    this._temperature = temperature;
    this._humidity = humidity;
  }

  get temperature() { return this._temperature; }
  set temperature(value: number) { this._temperature = value; }

  get humidity() { return this._humidity; }
  set humidity(value: number) { this._humidity = value; }

  static default() {
    return new DeviceInfo(-1, -1);
  }
}
