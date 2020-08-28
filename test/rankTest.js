const rankTest = require('ava');
const { rating, voyageProfitFactor, voyageRisk, captainHistoryRisk } = require('../src/rank');

rankTest('should return 2 when voyageProfitFactor given empty history and empty voyage', t => {
  //given
  let history = [];
  let voyage = {};
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(2, result);
});
rankTest('should return 2 when voyageProfitFactor given empty voyage and history has china', t => {
  //given
  let voyage = {};
  let history = [
    {
      zone: 'china',
      profit: -2,
    }
  ];
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(2, result);
});
rankTest('should return 3 when voyageProfitFactor given voyage has china and empty history', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 10,
  };
  let history = [];
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(3, result);
});
rankTest('should return 3 when voyageProfitFactor given voyage has china and empty history', t => {
  //given
  let voyage = {
    zone: 'east-indies',
    length: 10,
  };
  let history = [];
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(3, result);
});
rankTest('should return 6 when calculate voyageProfitFactor given voyage zone is china and history length = 6 and history has china and voyage length 7', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 7,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = voyageProfitFactor(voyage,history);
  //then
  t.is(6, result)
});