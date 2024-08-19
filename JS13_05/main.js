"use strict";

function durationBetweenDates(
  startDate = "07 Aug 1885",
  endDate = "03 Aug 1955",
  dimension = "days"
) {
  const diffInMs = new Date(endDate) - new Date(startDate);
  let result = null;

  switch (dimension) {
    case "hours":
      result = Math.floor(diffInMs / (1000 * 60 * 60));
      break;
    case "minutes":
      result = Math.floor(diffInMs / 60000);
      break;
    case "seconds":
      result = diffInMs / 1000;
      break;
    default:
      result = diffInMs / (1000 * 60 * 60 * 24);
  }

  return Math.abs(result.toFixed());
}

console.log(durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds")); // поверне '86400 seconds'
console.log(durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days")); // поверне '362 days'

// приклад об'єкту
const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

function optimizer(data) {
  const keyObj = Object.entries(data).map(([key, value]) => {
    return [key.toLowerCase(), Number(value).toFixed(2)];
  });

  return Object.fromEntries(keyObj);
}

const updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
