import data from './data.js';
import checkData from './errorCheck.js';
import renderWorkData from './UI.js';

const {
  hoursOnWork,
  minutesToGetToWork,
  minutesToGetToWorkFromBoughtApartments,
  workingDays,
  costToPayForYourCurrentHouseMonth,
  priceOfApartmentsNearJobMonth,
  taxes,
  salaryOnHands,
  salaryOnPaper,
  currency,
} = data;

checkData(data);

const totalWorkingHoursInMonth = getTotalWorkingHoursInMonth(
  hoursOnWork,
  minutesToGetToWork,
  workingDays
);

renderWorkData(
  totalWorkingHoursInMonth,
  taxes,
  salaryOnHands,
  salaryOnPaper,
  costToPayForYourCurrentHouseMonth,
  priceOfApartmentsNearJobMonth,
  minutesToGetToWorkFromBoughtApartments,
  hoursOnWork,
  minutesToGetToWork,
  workingDays,
  currency
);

export function getMonthSalaryOnHands(salaryOnHands, salaryOnPaper, taxes) {
  const taxesMultiplier = (100 - taxes) / 100;
  return salaryOnHands || salaryOnPaper * taxesMultiplier;
}

export function getSalaryAfterBuyingApartments(
  monthSalaryOnHands,
  priceOfApartments
) {
  const salary = monthSalaryOnHands - priceOfApartments;
  if (salary < 0) {
    return "You can't afford apartments";
  }
  return salary;
}

export function getSalaryPerHourWithApartmentsNearby(
  monthSalaryOnHands,
  priceOfApartments,
  minutesToGetToWorkFromBoughtApartments,
  hoursOnWork,
  workingDays
) {
  if (
    typeof getSalaryAfterBuyingApartments(
      monthSalaryOnHands,
      priceOfApartments
    ) !== 'number'
  ) {
    return "You can't afford apartments";
  }
  return Math.round(
    (monthSalaryOnHands - priceOfApartments) /
      (getHoursInWorkInMonth(hoursOnWork, workingDays) +
        getHoursInRoadInMonth(
          minutesToGetToWorkFromBoughtApartments,
          workingDays
        ))
  );
}

export function getSalaryAfterPayingForHouse(
  monthSalaryOnHands,
  costToPayForYourCurrentHouseMonth
) {
  return monthSalaryOnHands - costToPayForYourCurrentHouseMonth;
}

export function getSalaryPerHour(totalWorkingHoursInMonth, monthSalaryOnHands) {
  return Math.round(monthSalaryOnHands / totalWorkingHoursInMonth);
}

export function getHoursInRoadInMonth(minutesToGetToWork, workingDays) {
  return (minutesToGetToWork * workingDays * 2) / 60;
}

export function getHoursInWorkInMonth(hoursOnWork, workingDays) {
  return hoursOnWork * workingDays;
}

export function getTotalWorkingHoursInMonth(
  hoursOnWork,
  minutesToGetToWork,
  workingDays
) {
  return Math.round(
    getHoursInWorkInMonth(hoursOnWork, workingDays) +
      getHoursInRoadInMonth(minutesToGetToWork, workingDays)
  );
}
