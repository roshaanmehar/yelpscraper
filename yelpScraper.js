import { firefox } from 'playwright'; // Import Playwright's Firefox module

(async () => {
  // Launch Firefox browser (headless: false for debugging)
  const browser = await firefox.launch({ headless: false });

  // Create a new browser context to set a custom user agent
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 Firefox/92.0"
  });

  // Create a new page within the custom context
  const page = await context.newPage();

  // Open the Yelp page
  await page.goto('https://www.yelp.com/search?find_desc=plumbers&find_loc=San+Francisco%2C+CA', {
    waitUntil: 'domcontentloaded',
  });

  // Wait for page content to load
  await page.waitForSelector('.container__09f24__mpR8_');

  // Scrape the data
  const data = await page.evaluate(() => {
    const results = [];
    const businesses = document.querySelectorAll('.container__09f24__mpR8_');
    businesses.forEach((business) => {
      const name = business.querySelector('h4 > a') ? business.querySelector('h4 > a').innerText : 'No Name';
      const rating = business.querySelector('.i-stars__09f24__1T6rz') ? business.querySelector('.i-stars__09f24__1T6rz').ariaLabel : 'No Rating';
      const address = business.querySelector('.raw__09f24__T4Ezm') ? business.querySelector('.raw__09f24__T4Ezm').innerText : 'No Address';
      results.push({ name, rating, address });
    });
    return results;
  });

  console.log(data);

  await browser.close();
})();
