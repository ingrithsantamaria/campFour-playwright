import { devices } from '@playwright/test';
export default {
  projects: [
    {
      name: 'Desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Samsung A54',
      use: {
        ...devices['Pixel 5'],
        viewport: { width: 412, height: 915 },
      },
    },
    {
      name: 'iPhone 11',
      use: {
        ...devices['iPhone 11'],
      },
    },
  ],
  retries: 1,
  use: {
    baseURL: 'https://demo.spreecommerce.org',
    screenshot: 'off',
    video: 'off',
    timezoneId: 'America/New_York',
  },
  workers: 4,
  timeout: 30000,
};