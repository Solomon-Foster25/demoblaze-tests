# Demoblaze Test Suite

Automated end-to-end test suite for [demoblaze.com](https://www.demoblaze.com) built with Playwright and JavaScript. Tests run automatically on every push via GitHub Actions.

## Test Coverage

**Authentication** (`auth.spec.js`)
- Login with valid credentials
- Failed login with invalid credentials
- Logout successfully

**Navigation** (`navigation.spec.js`)
- Browse to a category and verify products load
- Click into a product and verify product detail page loads
- Filter by Laptops category and verify products update

**Cart** (`cart.spec.js`)
- Add a product to cart and confirm alert appears
- Verify added product appears in cart with correct name

**Checkout** (`checkout.spec.js`)
- Place an order successfully and verify confirmation message

## Tech Stack
- [Playwright](https://playwright.dev/) - test framework
- JavaScript
- Page Object Model - for reusable and maintainable page interactions
- StorageState - shared login session across tests to avoid repeated login flows
- GitHub Actions - CI pipeline

## Folder Structure

    demoblaze-tests/
    ├── tests/
    │   ├── auth.setup.js
    │   ├── auth.spec.js
    │   ├── cart.spec.js
    │   ├── checkout.spec.js
    │   └── navigation.spec.js
    ├── pages/
    │   └── LoginPage.js
    ├── .github/
    │   └── workflows/
    │       └── playwright.yml
    ├── playwright.config.js
    ├── test-data.js
    └── README.md

## How to Run

Install dependencies:

    npm install
    npx playwright install

Run all tests:

    npx playwright test

Run a specific file:

    npx playwright test auth.spec.js

View test report:

    npx playwright show-report
