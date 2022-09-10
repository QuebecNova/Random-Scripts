export default function checkData(data) {
  if (
    !data.costToPayForYourCurrentHouseMonth ||
    data.costToPayForYourCurrentHouseMonth < 0 ||
    typeof data.costToPayForYourCurrentHouseMonth !== 'number'
  ) {
    throw new Error('Set cost to pay for your house!');
  }

  if (!data.taxes || data.taxes < 0 || typeof data.taxes !== 'number') {
    throw new Error('Set taxes!');
  }

  if (
    (!data.salaryOnHands || typeof data.salaryOnHands !== 'number') &&
    (!data.salaryOnPaper || typeof data.salaryOnPaper !== 'number')
  ) {
    throw new Error('Set your salary!');
  }

  if (!data.hoursOnWork || typeof data.hoursOnWork !== 'number') {
    throw new Error('Set hours on work!');
  }

  if (!data.hoursOnWork || typeof data.hoursOnWork !== 'number') {
    throw new Error('Set hours on work!');
  }

  if (!data.workingDays || typeof data.workingDays !== 'number') {
    throw new Error('Set working days!');
  }

  if (
    !data.priceOfApartmentsNearJobMonth ||
    typeof data.priceOfApartmentsNearJobMonth !== 'number'
  ) {
    throw new Error('Set price of apartments!');
  }

  if (
    !data.minutesToGetToWorkFromBoughtApartments ||
    data.minutesToGetToWorkFromBoughtApartments < 0 ||
    typeof data.minutesToGetToWorkFromBoughtApartments !== 'number'
  ) {
    throw new Error('Set minutes to get to work from bought apartments!');
  }

  if (!data.currency || typeof data.currency !== 'string') {
    throw new Error('Set currency!');
  }

  if (
    !data.minutesToGetToWork ||
    !data.minutesToGetToWork < 0 ||
    typeof data.minutesToGetToWork !== 'number'
  ) {
    throw new Error('Set minutes to get to work from home!');
  }
}
