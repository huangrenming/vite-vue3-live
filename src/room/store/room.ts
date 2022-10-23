import { defineStore } from "pinia";
import { RoomModelState } from "../models/types";
import { state, actions } from '../models'

export const useRoomStore = defineStore<string, RoomModelState>("room", {
  state: () => {
    return {
      ...state
    };
  },
  actions: {
    ...actions
  }
});
