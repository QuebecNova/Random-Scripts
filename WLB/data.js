// WELCOME TO WORK LIFE BALANCE SCRIPT
// Here you can calculate your salary
// And you can check how profitable to buy apartments near job if you live far away

// SET DATA -------------------------------------------------------------------------

const hoursOnWork = 9;
const minutesToGetToWork = 120;
const minutesToGetToWorkFromBoughtApartments = 10;
const workingDays = 20;

//Set salaryOnPaper or salaryOnHands (by default we use salary on hands)
const salaryOnPaper = 180000;
const salaryOnHands = null;
const taxes = 13; // in percent
//

const costToPayForYourCurrentHouseMonth = 4000;
const priceOfApartmentsNearJobMonth = 45000;

const currency = 'RUB';

//Start with 'node script.js' in terminal

// END -----------------------------------------------------------------------------

const data = {
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
};

export default data;
