import { devices } from '@playwright/test';
export default {
  testDir: './e2e/tests',
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  retries: 1,
  reporter: [['html', { open: 'on-failure' }]],
  use: {
    baseURL: 'https://demo.spreecommerce.org/ ',
    screenshot: 'off',
    video: 'off',
    timezoneId: 'America/New_York',
  },
  workers: 4,
  timeout: 30000,
};