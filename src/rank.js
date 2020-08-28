function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (isHasChina(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  result += isHasChina(voyage, history) ? calculateChinaProfit(history, voyage) : calculateNoChinaProfit(history, voyage);
  return result;
}

function isHasChina(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function calculateNoChinaProfit(history, voyage) {
  let result = 0;
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function calculateChinaProfit(history, voyage) {
  let result = 3;
  result += history.length > 10 ? 1 : 0;
  result += voyage.length > 12 ? 1 : 0;
  result += voyage.length > 18 ? -1 : 0;
  return result;
}

function rating(voyage, history) {
  const profit = voyageProfitFactor(voyage, history);
  const risk = voyageRisk(voyage);
  const historyRisk = captainHistoryRisk(voyage, history);
  if (profit * 3 > (risk + historyRisk * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  rating, voyageProfitFactor, voyageRisk, captainHistoryRisk
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
