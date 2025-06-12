export default class DeviceInfo {
  private _temperature: number;
  private _humidity: number;
  private _passengerNumber: number;

  constructor(temperature: number, humidity: number, passengerNumber: number) {
    this._temperature = temperature;
    this._humidity = humidity;
    this._passengerNumber = passengerNumber;
  }

  get temperature() { return this._temperature; }

  get humidity() { return this._humidity; }

  get passengerNumber() { return this._passengerNumber; }

  static default() {
    return new DeviceInfo(-1, -1, -1);
  }
}
