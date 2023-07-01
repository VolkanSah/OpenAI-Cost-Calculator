import os
import sys

def get_price(model_name):
  """Gets the price of a single GPT-3 API call for a given model."""
  price_file = os.path.join(os.path.dirname(__file__), "prices.json")
  with open(price_file, "r") as f:
    prices = json.load(f)
  return prices[model_name]

def calculate_cost(number_of_calls, model_name):
  """Calculates the cost of a given number of API calls for a given model."""
  price = get_price(model_name)
  return number_of_calls * price

def main():
  """The main function."""
  model_name = sys.argv[1]
  number_of_calls = int(sys.argv[2])
  cost = calculate_cost(number_of_calls, model_name)
  print(f"The cost of {number_of_calls} API calls for the {model_name} model is \\${cost}.")

if __name__ == "__main__":
  main()
