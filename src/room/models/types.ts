import { UserModelState } from "./user";
import { SettingsModelState } from "./settings";
import { ClassRoomModelState } from "./classroom";

export interface RoomModelState {
  currentUser: UserModelState;
  settings: SettingsModelState;
  classroom: ClassRoomModelState;
}

export interface RoomActionState {
  setCurrentUser: Function;
}

export interface IVolume {}
