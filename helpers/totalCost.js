// this should be calculated in the backend but given this is a front end project:
const totalCost = (investmentData) => {
  let total = 0;
  for (let i = 0; i < investmentData.length; i += 1) {
    for (let j = 0; j < investmentData[i].issued_assets.length; j += 1) {
      total += investmentData[i].issued_assets[j].cost.$;
    }
  }
  return total;
};

export default totalCost;
