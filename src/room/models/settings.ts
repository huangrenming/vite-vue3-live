import { RoomModelState } from "./types";
interface Resolution {
  width: number;
  height: number;
}

interface Range {
  min: number;
  max: number;
}

export interface StreamSettings {
  resolution: Resolution;
  frameRate: Range;
  bitrate: Range;
}

export interface SettingsModelState {
  streamSettings: StreamSettings;
  screenStreamSettings: StreamSettings;
  mic: string;
  camera: string;
  realtimeParam: boolean;
}

const streamInitialState = {
  resolution: {
    width: 640,
    height: 480,
  },
  frameRate: {
    min: 10,
    max: 15,
  },
  bitrate: {
    min: 250,
    max: 600,
  },
};

const screenStreamInitialState = {
  resolution: {
    width: 1920,
    height: 1080,
  },
  frameRate: {
    min: 10,
    max: 15,
  },
  bitrate: {
    min: 800,
    max: 2000,
  },
};

export const settingsInitialState: SettingsModelState = {
  streamSettings: streamInitialState,
  screenStreamSettings: screenStreamInitialState,
  mic: "",
  camera: "",
  realtimeParam: false,
};
export const settingsActions = {
  setStreamSettings(data: RoomModelState, value: Resolution) {},
  setScreenStreamSettings(data: RoomModelState, value: Resolution) {},
  setMic(data: RoomModelState, value: boolean) {},
  setCamera(data: RoomModelState, value: boolean) {},
};
