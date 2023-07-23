import { atom } from "recoil";

export const audioPlay = atom<boolean>({
  key: "audioPlay",
  default: false,
});
