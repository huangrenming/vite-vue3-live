import { Store } from 'pinia'
import { RoomModelState } from '../models/types'
export default class DeviceController {
  private _room: Store<string, RoomModelState>;
  constructor(_room: Store<string, RoomModelState>) {
    this._room = _room;
  }

  setAppID(appId: string) {
    this._room.classroom.appId = appId
  }
}
