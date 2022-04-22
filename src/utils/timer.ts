const ONE_DAY_MS = 1000 * 60 * 60 * 24;

const daysBetween = (date1: Date, date2: Date) => {
  // Convert both dates to milliseconds
  const date1_ms = date1.getTime();
  const date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  const difference = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.floor(difference / ONE_DAY_MS);
};

const secondsDifference = (date1: Date, date2: Date) => {
  // Convert both dates to milliseconds
  const date1_ms = date1.getTime();
  const date2_ms = date2.getTime();

  const difference_ms = date2_ms - date1_ms;
  const difference = difference_ms / ONE_DAY_MS;

  const offset = difference - Math.floor(difference);
  return offset * (60 * 60 * 24);
};

export const getDifferenceBetweenDates = (from: Date, to: Date) => {
  const days = daysBetween(from, to);

  if (Object.is(days, -0) || days < 0) return [0, 0, 0, 0];

  let secondsLeft = secondsDifference(from, to);

  const hours = Math.floor(secondsLeft / 60 / 60);
  secondsLeft = secondsLeft - hours * 60 * 60;

  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft - minutes * 60;

  const seconds = Math.floor(secondsLeft);

  return [days, hours, minutes, seconds];
};
