# campFour-playwright
Camp to reinforce skills with the playwright JS and POM framework
# Configuration inicial
1. The playwright framework and faker library are installed with the following command: 
``` bash
npm install --save-dev @playwright/test faker
```
## Getting started
```bash
npm install
```
## Automation estructure
- This project follows a modular test structure with the following hierarchy for organizing features and step definitions:

```
└─── e2e/
    ├─── pages/
        │    └─── register/
            │         └─── registerPage.js
    ├─── tests/
        └─── register
                └─── registerTest.spec.js
                               
```
## Run Project
You must be inside the playwright folder to run the following commands
1. Playwright will run all projects by default.
```bash
npx playwright test
```
2. Run tests in interactive UI mode, with a built-in watch mode (Preview)
```bash
npx playwright test --ui
```
3. Playwright will run all projects with tag @smoke
```bash
npx playwright test --grep @smoke
``` 
or
```bash
npx playwright test --ui --grep @smoke
```
4. Use the --project command line option to run a single project.
```bash
npx playwright test --ui --project='Desktop'
```
```bash
npx playwright test --ui --project='Samsung A54'
```
```bash
npx playwright test --ui --project='iPhone 11'
```
## Use of artificial intelligence
Gemini is used as a guide to identify how to use the same method when the selector on mobile is different from the desktop.
