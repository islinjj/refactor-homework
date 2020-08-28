const deliveryTest = require('ava');
const { deliveryDate } = require('../src/delivery');

deliveryTest('should return 2 when deliveryDate given rush is true and ma', t => {
    //given
    let isRush = true;
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (x) => {
                return x
            }
        }
    }
    //when
    const result = deliveryDate(anOrder, isRush);
    //then
    t.is(result, 2);
});
deliveryTest('should return 2 when deliveryDate given rush is true and ny', t => {
    //given
    let isRush = true;
    let anOrder = {
        deliveryState: 'NY', placedOn: {
            plusDays: (x) => {
                return x
            }
        }
    }
    //when
    const result = deliveryDate(anOrder, isRush);
    //then
    t.is(result, 3);
});
deliveryTest('should return 4 when deliveryDate given rush is true and mq', t => {
    //given
    let isRush = true;
    let anOrder = {
        deliveryState: 'MQ', placedOn: {
            plusDays: (x) => {
                return x
            }
        }
    }
    //when
    const result = deliveryDate(anOrder, isRush);
    //then
    t.is(result, 4);
});
deliveryTest('should return 4 when deliveryDate given rush is false and ma', t => {
    //given
    let isRush = false;
    let anOrder = {
        deliveryState: 'MA', placedOn: {
            plusDays: (x) => {
                return x
            }
        }
    }
    //when
    const result = deliveryDate(anOrder, isRush);
    //then
    t.is(result, 4);
});