let now = new Date();

// 년 월 일
export const TodayDate = () => {
  let year = String(now.getFullYear());
  let month = String(now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1);
  let day = String(now.getDate());

  return Number(year + month + day);
};

// 시 분
export const TodayTime = () => {
  let hours = String(now.getHours() < 10 ? "0" + now.getHours() : now.getHours());
  let minutes = String(now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());

  return Number(hours + minutes);
};
