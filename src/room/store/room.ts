import { defineStore } from "pinia";
import { RoomModelState } from "../models/types";
import { state, actions } from '../models'
import { UserModelState } from '../models/user'
const actionsMap = {...actions}

export const useRoomStore = defineStore<string, RoomModelState>("room", {
  state: () => {
    return {
      ...state
    };
  },
  actions: {
    setCurrentUser(value: UserModelState) {
      actionsMap.setCurrentUser(this, value)
    }
  }
});
