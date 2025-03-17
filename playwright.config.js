// @ts-check
import { defineConfig } from '@playwright/test';


export default defineConfig({
  reporter: [['line'],['allure-playwright']],
  testDir: './tests',
});

