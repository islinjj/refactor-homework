function deliveryDate(anOrder, isRush) {
  if (isRush) {
    return rushDeliveryDate(anOrder);
  }
  else {
    return regularDeliveryDate(anOrder);
  }
}
function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if (isIncludesDeliveryState(['MA', 'CT', 'NY',], anOrder)) {
    deliveryTime = 2;
  }
  else if (isIncludesDeliveryState(['ME', 'NH'], anOrder)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if (isIncludesDeliveryState(['MA', 'CT'], anOrder)) {
    deliveryTime = 1;
  }
  else if (isIncludesDeliveryState(['NY', 'NH'], anOrder)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function isIncludesDeliveryState(states, anOrder) {
  return states.includes(anOrder.deliveryState)
}

module.exports = {
  deliveryDate
}

