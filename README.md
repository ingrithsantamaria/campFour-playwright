# campFour-playwright
Camp to reinforce skills with the playwright JS and POM framework
# Configuration inicial
1. The playwright framework and faker library are installed with the following command: 
``` bash
npm install --save-dev @playwright/test faker
```
## Getting started
```bash
pnpm install
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
