document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const currentDayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  currentDayOfTheWeekElement.textContent = daysOfWeek[now.getUTCDay()];
  currentUTCTimeElement.textContent = `Current UTC Time: ${now.getTime()} milliseconds`;
});
