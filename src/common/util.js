/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
export function clamp(x, from_x, to_x) {
  if (x < from_x) x = from_x;
  if (x > to_x) x = to_x;
  return x;
}
export function animateEx(dx, startTime, currentTime, speed, looped = false) {
  const diff = currentTime - startTime;
  let time = (speed && diff / speed) || 0;

  if (looped) {
    // eslint-disable-next-line operator-assignment
    time = time % 1;
  } else if (time > 1) {
    time = 1;
  }
  return { offset: dx * time, progress: time };
}
export const normalize = (num) => (num.toString().length > 1 ? num : `0${num}`);

export function getTime(date) {
  const convertDate = new Date(date);
  return `${normalize(convertDate.getHours())}:${normalize(convertDate.getMinutes())}:${normalize(convertDate.getSeconds())}`;
}
