const printTest = require('ava');
const { printOwing } = require('../src/print');

printTest('should return format custormer ows info when printOwing given invoice', t => {
    //given
    const today = new Date();
    const invoice = {
        customer: 'vicky',
        borderSpacing: [{
            amount: 1
        }],
        dueDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
    }
    //when
    const result = printOwing(invoice);
    //then
    t.is(result, `***********************\n` +
        `**** Customer Owes ****\n` +
        `***********************\n` +
        `name: vicky\n` +
        `amount: 1\n` +
        `amount: ` + invoice.dueDate.toLocaleDateString());
})