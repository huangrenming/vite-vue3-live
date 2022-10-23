import { RoomModelState, RoomActionState } from "./types";
import { userInitialState, userActions } from "./user";
import { settingsInitialState, settingsActions } from "./settings";
import { classRoomInitialState, classRoomActions } from "./classroom";
import { initRtcClient } from "./client";

export const state: RoomModelState = {
  currentUser: {
    ...userInitialState,
  },
  settings: {
    ...settingsInitialState,
  },
  classroom: {
    ...classRoomInitialState
  }
};

export const actions: RoomActionState = {
  ...userActions,
  ...settingsActions,
  ...classRoomActions
};
