const getPrice = (modelName) => {
  const priceFile = `${__dirname}/prices.json`;
  const prices = require(priceFile);
  return prices[modelName];
};

const calculateCost = (numberOfCalls, modelName) => {
  const price = getPrice(modelName);
  return numberOfCalls * price;
};

const main = async () => {
  const modelName = await window.prompt("Enter the model name:");
  const numberOfCalls = await window.prompt("Enter the number of API calls:");
  const cost = calculateCost(numberOfCalls, modelName);
  const formattedCost = `The cost of ${numberOfCalls} API calls for the ${modelName} model is \\${cost}.`;
  window.alert(formattedCost);
};

main();
