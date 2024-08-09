// const date1 = new Date("2024-08-01");
// const date2 = new Date("2024-09-01");

// function getDays(date1, date2) {
//   const differenceInTime = date2.getTime() - date1.getTime();

//   const differenceInDays = differenceInTime / (1000 * 3600 * 24);

//   return Math.round(differenceInDays);
// }
// const daysBetween = getDays(date1, date2);
// console.log(daysBetween);

function getDays(startDate, endDate) {
  const totalTime = startDate.getTime() - endDate.getTime();
  //   console.log(totalTime);
  const totalDays = totalTime / (1000 * 3600 * 24);
  return totalDays;
}
const days = getDays(
  new Date("August 14, 2019"),
  new Date("September 1, 2019")
);
console.log(days);
