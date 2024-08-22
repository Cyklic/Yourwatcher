import dayjs from "dayjs";

export const getMonthDays = (date: Date) => {
  const startOfMonth = dayjs(date).startOf("month");
  //   const endOfMonth = dayjs(date).endOf("month");
  const numOfDays = dayjs(date).daysInMonth();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getWeek = (
    nextDay = days.indexOf(dayjs(startOfMonth).format("ddd")),
    memo: string[] = []
  ): any => {
    const _arr = [...memo];
    _arr.push(days[nextDay]);

    if (_arr.length === days.length) return _arr;

    return getWeek(nextDay + 1 === 7 ? 0 : nextDay + 1, _arr);
  };

  const week = getWeek();

  const recursiveArray = (dayIndex = 1, memo: string[] = []): string[] => {
    const fullArray: string[] = [...memo];
    fullArray.push(
      week[dayIndex % 7 === 0 ? week.length - 1 : (dayIndex % 7) - 1]
    );

    if (dayIndex === numOfDays) {
      return fullArray;
    }

    return recursiveArray(dayIndex + 1, fullArray);
  };

  return recursiveArray();
};
