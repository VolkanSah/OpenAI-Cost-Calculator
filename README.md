# OpenAI Cost Calculator
OpenAI Cost Calculator is a simple tool that allows you to estimate the cost of using OpenAI's GPT-3 API. It includes implementations in both JavaScript and Python.

## Requirements
Node.js and npm (for the JavaScript version)
Python 3.x (for the Python version)
## Usage
### JavaScript
Navigate to the in-javascript directory.
Install the dependencies with npm install.
Run the script with node ccj.js.
### Python
- Navigate to the in-python directory.
- No extra dependencies are needed. Just ensure you're running Python 3.x.
Run the script with
```python
python3 ccp.py
```
## Price Configuration and Tokens
The pricing information for each model is/can stored in a prices.json file in each directory. It's essential to note that prices can vary, and you should make sure to keep the prices updated according to OpenAI's official pricing.

One crucial part of understanding the pricing is knowing how OpenAI counts tokens. A "token" in OpenAI terms can be as short as one character or as long as one word. For instance, "ChatGPT is great!" is encoded into six tokens: ["Chat", "G", "PT", " is", " great", "!"]. In most languages, a single character like "a" or a punctuation mark like "." is considered one token.

## Please Note
This tool is meant to give a rough estimate of how much your usage of the GPT-3 API might cost. However, it's always a good idea to monitor your actual usage through the OpenAI API dashboard to prevent unexpected costs. This tool does not guarantee the exact pricing, as prices may vary, and the token count may differ based on the specifics of your API calls.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## Thank you for your support!
If you appreciate my work, please consider supporting me:

- Become a Sponsor: [Link to my sponsorship page](https://github.com/sponsors/volkansah)
- :star: my projects: Starring projects on GitHub helps increase their visibility and can help others find my work. 
- Follow me: Stay updated with my latest projects and releases.

## License
This project is licensed under the "Help the World Grow [💔](https://jugendamt-deutschland.de) " License . See the [LICENSE](LICENSE)  

## Copyright
[Volkan Kücükbudak](https://gihub.com/volkansah)
