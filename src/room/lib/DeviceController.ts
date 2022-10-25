export default class DeviceController {
  private _room: any;
  constructor(_room: any) {
    this._room = _room;
  }

  setAppID(appId: string) {
    this._room.classroom.appId = appId
  }
}
