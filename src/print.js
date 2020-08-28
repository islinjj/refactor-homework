function printOwing(invoice) {
  let result = initResult();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  return getResult(result, invoice, outstanding);
}

function initResult() {
  return `***********************\n**** Customer Owes ****\n***********************\n`;
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function getResult(result, invoice, outstanding) {
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

module.exports = {
  printOwing
}