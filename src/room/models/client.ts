import RtcClient from "../rtcApi/rtc-client";
export interface RTCClientControlModelState {
  rtc: RtcClient;
}
interface config {
  appId: string;
  uid: string;
}
export const initRtcClient = (config?: config): RTCClientControlModelState => {
  return {
    rtc: new RtcClient(),
  };
};
