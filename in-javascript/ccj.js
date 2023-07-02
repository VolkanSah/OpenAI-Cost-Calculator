const getPrice = async (modelName) => {
  const response = await fetch('/prices.json');
  const prices = await response.json();
  return prices[modelName];
};

const calculateCost = async (numberOfCalls, modelName) => {
  const price = await getPrice(modelName);
  return numberOfCalls * price;
};

const main = async () => {
  const modelName = prompt("Enter the model name:");
  const numberOfCalls = prompt("Enter the number of API calls:");
  
  if (modelName && numberOfCalls) {
    const cost = await calculateCost(numberOfCalls, modelName);
    const formattedCost = `The cost of ${numberOfCalls} API calls for the ${modelName} model is \\${cost}.`;
    alert(formattedCost);
  } else {
    alert("Please provide both the model name and the number of API calls.");
  }
};

main();
