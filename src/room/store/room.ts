import { defineStore } from "pinia";
import { RoomModelState } from "../models/types";
import { state, actions } from '../models'
import { UserModelState } from '../models/user'
import DeviceController from '../lib/DeviceController'
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

export const room = useRoomStore()
const getDeviceLibInstance = () => {
  let instance: DeviceController | undefined
  return function () {
    if(!instance) {
      return instance = new DeviceController(room)
    } else {
      return (instance as DeviceController)
    }
  }
}

export const deviceLib: DeviceController = getDeviceLibInstance()()

