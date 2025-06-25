import moment from 'moment';

export const dateFormatter = (date: Date | string, format?: string, showToday?: boolean) => {
  const isToday = moment().diff(date, 'days') < 1;
  return isToday && showToday ? 'Today' : moment(date, 'YYYY-MM-DD').format(format ?? 'MMM Do');
};
