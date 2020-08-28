function voyageRisk(voyage) {
  let result = 1;
  result += voyage.length > 4 ? (voyage.length > 8 ? voyage.length - 6 : 2) : 0;
  if (hasZone(voyage)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasZone(voyage) {
  return [
    'china',
    'east-indies',
  ].includes(voyage.zone);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1 + (history.length < 5 ? 4 : 0);
  result += history.filter(v => v.profit < 0).length;
  if (isChina(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  result += isChina(voyage, history) ? calculateChinaProfit(history, voyage) : calculateNoChinaProfit(history, voyage);
  return result;
}

function isChina(voyage, history) {
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

function isProfitHigherThenRisk(data) {
  return data.profit * 3 > (data.risk + data.historyRisk * 2);
}

function initData(voyage, history) {
  return {
    profit: voyageProfitFactor(voyage, history),
    risk: voyageRisk(voyage),
    historyRisk: captainHistoryRisk(voyage, history)
  }
}

function rating(voyage, history) {
  return isProfitHigherThenRisk(initData(voyage, history)) ? 'A' : 'B';
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

