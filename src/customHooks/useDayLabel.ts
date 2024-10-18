import moment from 'moment';

const useDayLabel = () => {
  const getDayLabel = (value: string) => {
    const today = moment().startOf('day');
    const inputDate = moment(value).startOf('day');

    if (inputDate.isSame(today, 'day')) {
      return 'Today';
    } else if (inputDate.isSame(today.clone().add(1, 'days'), 'day')) {
      return 'Tomorrow';
    } else {
      return inputDate.format('dddd'); // e.g., 'Saturday', 'Sunday', etc.
    }
  };

  return {getDayLabel};
};
export default useDayLabel;
