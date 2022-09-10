import {
  getMonthSalaryOnHands,
  getSalaryPerHour,
  getSalaryAfterBuyingApartments,
  getSalaryAfterPayingForHouse,
  getSalaryPerHourWithApartmentsNearby,
  getHoursInRoadInMonth,
} from './script.js';

export default function renderWorkData(
  totalWorkingHours,
  taxes,
  salaryOnHands,
  salaryOnPaper,
  costToPayForYourCurrentHouseMonth,
  priceOfApartments,
  minutesToGetToWorkFromBoughtApartments,
  hoursOnWork,
  minutesToGetToWork,
  workingDays,
  currency
) {
  const monthSalaryOnHands = getMonthSalaryOnHands(
    salaryOnHands,
    salaryOnPaper,
    taxes
  );
  const salaryPerHour = getSalaryPerHour(totalWorkingHours, monthSalaryOnHands);
  const salaryAfterBuyingApartments = getSalaryAfterBuyingApartments(
    monthSalaryOnHands,
    priceOfApartments
  );
  const salaryAfterPayingForHouse = getSalaryAfterPayingForHouse(
    monthSalaryOnHands,
    costToPayForYourCurrentHouseMonth
  );
  const salaryPerHourAfterPayingForHouse = getSalaryPerHour(
    totalWorkingHours,
    salaryAfterPayingForHouse
  );
  const salaryPerHourWithApartmentsNearby =
    getSalaryPerHourWithApartmentsNearby(
      monthSalaryOnHands,
      priceOfApartments,
      minutesToGetToWorkFromBoughtApartments,
      hoursOnWork,
      workingDays
    );
  const hoursInRoadInMonth = getHoursInRoadInMonth(
    minutesToGetToWork,
    workingDays
  );

  let isBuyApartmentsGood = false;
  if (typeof salaryAfterBuyingApartments === 'number') {
    isBuyApartmentsGood =
      salaryPerHourWithApartmentsNearby >= salaryPerHourAfterPayingForHouse;
  }

  console.log(
    '\n--------------------- WORK LIFE BALANCE ----------------------\n'
  );

  console.log(`Your salary:`, monthSalaryOnHands, currency);
  console.log(
    'Salary after you pay for house:',
    salaryAfterPayingForHouse,
    addCurrencyIfNeeded(salaryAfterPayingForHouse, currency)
  );
  console.log('Work hours:', hoursOnWork);
  console.log('Minutes to get to job:', minutesToGetToWork);

  console.log(
    `\nTotal hours on work and movement to work in month:`,
    totalWorkingHours
  );
  console.log('Total hours on work in month:', hoursOnWork * workingDays);
  console.log(`Total hours to get to work in month:`, hoursInRoadInMonth);

  console.log(
    '\nCost to buy apartments near job:',
    priceOfApartments,
    currency
  );
  console.log(
    'Salary after you pay for apartments:',
    salaryAfterBuyingApartments,
    addCurrencyIfNeeded(salaryAfterBuyingApartments, currency)
  );

  console.log(`\nSalary per hour:`, salaryPerHour, currency);
  console.log(
    `Salary per hour after paying for house:`,
    salaryPerHourAfterPayingForHouse,
    currency
  );
  console.log(
    `Salary per hour if you buy apartments:`,
    salaryPerHourWithApartmentsNearby,
    addCurrencyIfNeeded(salaryPerHourWithApartmentsNearby, currency)
  );

  if (isBuyApartmentsGood) {
    console.log('\nBetter to buy apartment');
  } else {
    console.log('\nStay strong bro, no need to buy apartments');
  }

  console.log(
    '\n-----------------------------------------------------------\n'
  );
}

function addCurrencyIfNeeded(value, currency) {
  return typeof value === 'number' && value !== 0 ? currency : '';
}
