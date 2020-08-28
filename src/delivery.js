function deliveryDate(anOrder, isRush) {
  return isRush ? rushDeliveryDate(anOrder) : regularDeliveryDate(anOrder);
}
function regularDeliveryDate(anOrder) {
  return anOrder.placedOn.plusDays(2 + calculateRegularDeliveryTime(anOrder));
}

function calculateRegularDeliveryTime(anOrder) {
  return isIncludesDeliveryState(['MA', 'CT', 'NY',], anOrder) ? 2 : isIncludesDeliveryState(['ME', 'NH'], anOrder) ? 3 : 4;
}

function rushDeliveryDate(anOrder) {
  return anOrder.placedOn.plusDays(1 + calculateRushDeliveryDate(anOrder));
}

function calculateRushDeliveryDate(anOrder) {
  return isIncludesDeliveryState(['MA', 'CT'], anOrder) ? 1 : isIncludesDeliveryState(['NY', 'NH'], anOrder) ? 2 : 3;
}

function isIncludesDeliveryState(states, anOrder) {
  return states.includes(anOrder.deliveryState)
}

module.exports = {
  deliveryDate
}

