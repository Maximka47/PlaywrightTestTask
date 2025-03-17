// @ts-check
import { defineConfig } from '@playwright/test';


export default defineConfig({
  reporter: [['line'],['allure-playwright']],
  use: {
    trace: 'on', // Optional: Enable tracing for debugging
  },
  testDir: './tests',
});

