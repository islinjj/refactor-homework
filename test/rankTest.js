const rankTest = require('ava');
const { rating } = require('../src/rank');

rankTest('should return 2 when rating given empty history and empty voyage', t => {
  //given
  let history = [];
  let voyage = {};
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
});
