import moment from "moment";

const getDayLabel = (value: string) => {
  const today = moment().startOf("day");
  const inputDate = moment(value).startOf("day");

  if (inputDate.isSame(today, "day")) {
    return "Today";
  } else if (inputDate.isSame(today.clone().add(1, "days"), "day")) {
    return "Tomorrow";
  } else {
    return inputDate.format("dddd");
  }
};

export const utilies = {
  getDayLabel,
};
