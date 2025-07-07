import { makeAutoObservable } from "mobx";
import fetchAllProperties from "../api/FetchAllProperties";
import DeviceInfo from "../models/DeviceInfo";

class DeviceInfoViewModel {
  private static _Instance: DeviceInfoViewModel;
  static get Instance() {
    if (!this._Instance) {
      this._Instance = new DeviceInfoViewModel();
    }
    return this._Instance;
  }

  private constructor() {
    makeAutoObservable(this);

    this.init();
  }

  private _deviceInfo: DeviceInfo = DeviceInfo.default();
  private async init() {
    this._deviceInfo = await fetchAllProperties();
  }

  get temperature() { return this._deviceInfo.temperature; }
  get humidity() { return this._deviceInfo.humidity; }
  get passengerNumber() { return this._deviceInfo.passengerNumber; }

  async flush() { await this.init(); }
}

export default function useDeviceInfoViewModel() {
  return DeviceInfoViewModel.Instance;
}
