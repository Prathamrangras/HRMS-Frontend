export function daysLeftBetweenDates(date1, date2) {
  // Convert date strings to Date objects
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = endDate - startDate;

  // Convert milliseconds to days
  const daysLeft = timeDifferenceMs / (1000 * 60 * 60 * 24);

  // Return the number of days left (you can use Math.ceil to round up to the nearest whole day)
  return Math.ceil(daysLeft);
}

export function convertDate(date) {}
