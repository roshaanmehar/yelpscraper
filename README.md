# Yelp Business Scraper

## Introduction
This project is a web scraper built using [Playwright](https://playwright.dev/) that extracts business listings from Yelp. The scraper gathers details like business names, ratings, and addresses for a given search query and location.

## Features
- Scrapes Yelp business listings based on search query and location.
- Extracts business names, ratings, and addresses.
- Uses Playwright's Firefox browser automation.
- Custom user-agent for improved anonymity.

  This is how the extracted data will look like:
  <br>
  <img src="https://github.com/roshaanmehar/yelpscraper/blob/main/Screenshot%202025-02-08%20191732.png" alt="Extracted JSON Data" height="300">

  
## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [Playwright](https://playwright.dev/) package

### Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/roshaanmehar/yelpscraper.git
   cd yelp-scraper
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Usage
Run the script with the following command:
```sh
node index.js
```
This will launch a Firefox browser, navigate to Yelp, scrape the data, and print it in the console.


## This is what the website looks like:
<div>
  <img src="https://github.com/roshaanmehar/yelpscraper/blob/main/Screenshot%202025-02-08%20235050.png" width="500">
  <img src="https://github.com/roshaanmehar/yelpscraper/blob/main/Screenshot%202025-02-08%20235035.png" width="500">
</div>
## Configuration
You can modify the script to change:
- **Search Query & Location**: Modify the `page.goto` URL parameters.
- **Data Extraction**: Adjust the CSS selectors used in `page.evaluate()`.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contribution
Feel free to submit issues or pull requests to enhance the scraper!

## Disclaimer
This project is for educational purposes only. Scraping websites may violate their terms of service; use it responsibly.

