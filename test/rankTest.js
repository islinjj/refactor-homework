const rankTest = require('ava');
const { rating,voyageProfitFactor,voyageRisk,captainHistoryRisk } = require('../src/rank');

rankTest('should return 2 when voyageProfitFactor given empty history and empty voyage', t => {
  //given
  let history = [];
  let voyage = {};
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(2, result);
});
rankTest('should return 2 when voyageProfitFactor given empty voyage and history has china',t => {
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
})
