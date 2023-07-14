import { TodayTime } from "./dateTime";

const base: number[] = [200, 500, 800, 1100, 1400, 1700, 2000, 2300];

export const BaseTime = () => {
  for (let i = 0; i < base.length; i++) {
    if (base[i] <= TodayTime() && base[i + 1] > TodayTime()) return base[i];
  }
  return 2300;
};
