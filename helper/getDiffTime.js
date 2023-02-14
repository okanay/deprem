export function getTimeDiffString(timestamp) {
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const diff = Math.abs(Date.now() - timestamp);

  if (diff < oneMinute) {
    const seconds = Math.round(diff / oneSecond);
    return `${seconds} sn`;
  } else if (diff < oneHour) {
    const minutes = Math.round(diff / oneMinute);
    return `${minutes} dk`;
  } else if (diff < oneDay) {
    const hours = Math.round(diff / oneHour);
    return `${hours} s`;
  } else {
    const days = Math.round(diff / oneDay);
    return `${days} g`;
  }
}