# Demoblaze Test Suite

Automated end-to-end test suite for [demoblaze.com](https://www.demoblaze.com) built with Playwright and JavaScript.

## Test Coverage

**Authentication** (`auth.spec.js`)
- Successful login with valid credentials
- Failed login with invalid credentials

**Navigation** (`navigation.spec.js`)
- Browse to a product category and verify products load
- Click into a product and verify product detail page loads

**Cart** (`cart.spec.js`)
- Add a product to cart and confirm alert appears
- Verify added product appears in cart

## Tech Stack
- [Playwright](https://playwright.dev/) - test framework
- JavaScript
- Page Object Model for reusable code

## How to Run

Install dependencies:
\```
npm install
npx playwright install
\```

Run all tests:
\`\`\`
npx playwright test
\`\`\`

Run a specific file:
\`\`\`
npx playwright test auth.spec.js
\`\`\`