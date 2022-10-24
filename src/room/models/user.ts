import { TOASTS } from "../config/config";
import { RoomModelState } from "./types";

export interface UserModelState {
  appId: string | null;
  name: string | null;
  roomId: string | null;
  isHost: boolean;
  isMicOn: boolean;
  isCameraOn: boolean;
  isSharing: boolean;
  createdAt: number;
  logged: boolean;
  userId: string | null;
  deviceAccess: {
    audio: boolean;
    video: boolean;
    audioMessage?: keyof typeof TOASTS;
    videoMessage?: keyof typeof TOASTS;
  };
  network: boolean;
}

export const userInitialState: UserModelState = {
  appId: null,
  name: null,
  roomId: null,
  isHost: false,
  isMicOn: true,
  isCameraOn: true,
  isSharing: false,
  createdAt: -1,
  logged: false,
  userId: null,
  deviceAccess: {
    audio: true,
    video: true,
  },
  network: true,
};

export const userActions = {
  setCurrentUser(room: RoomModelState, value: UserModelState) {
    Object.assign(room.currentUser, value)
  },
};
