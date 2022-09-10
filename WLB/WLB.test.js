import {
  getTotalWorkingHoursInMonth,
  getSalaryPerHour,
  getSalaryPerHourWithApartmentsNearby,
} from './script.js';

describe('TESTING WLB SCRIPT:', () => {
  const hoursOnWork = 8;
  const minutesToGetToWork = 60;
  const priceOfApartments = 50000;
  const workingDays = 20;
  const minutesToGetToWorkFromBoughtApartments = 10;
  const salaryInMonthOnHands = 100000;
  it('Function getTotalWorkingHoursInMonth', () => {
    expect(
      getTotalWorkingHoursInMonth(hoursOnWork, minutesToGetToWork, workingDays)
    ).toEqual(200);
  });

  it('Function getSalaryPerHour', () => {
    expect(
      getSalaryPerHour(
        getTotalWorkingHoursInMonth(
          hoursOnWork,
          minutesToGetToWork,
          workingDays
        ),
        salaryInMonthOnHands
      )
    ).toEqual(500);
  });

  it('Function getSalaryPerHourWithApartmentsNearby', () => {
    expect(
      getSalaryPerHourWithApartmentsNearby(
        salaryInMonthOnHands,
        priceOfApartments,
        minutesToGetToWorkFromBoughtApartments,
        hoursOnWork,
        workingDays
      )
    ).toEqual(300);
  });
});
