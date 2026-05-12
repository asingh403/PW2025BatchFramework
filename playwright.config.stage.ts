/// <reference types="node" />
import { defineConfig, devices } from "@playwright/test";
// import process from "process";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list", { printSteps: true }],
    ["html"],
    ["allure-playwright"],
    [
      "playwright-html-reporter",
      {
        testFolder: "tests",
        title: "OPEN CART HTML Report",
        project: "OPEN CART",
        release: "9.87.6",
        testEnvironment: "DEV",
        embedAssets: true,
        embedAttachments: true,
        outputFolder: "html-report",
        minifyAssets: true,
        startServer: false, //"true" it is for local system
      },
    ],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: "on-first-retry",
    headless: !!process.env.CI,
    screenshot: "on-first-failure",
    video: "on",
    baseURL: "https://naveenautomationlabs.com/opencart/index.php",
  },

  metadata: {
    appUserName: 'stage_test@asingh.fun',
    appPassword: 'test@123'
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "chromium",
    //   use: {
    //     channel: "msedge",
    //     viewport: null,
    //     launchOptions: {
    //       args: ['--start-maximized'],
    //       ignoreDefaultArgs: ["--window-size=1280,720"],
    //     },
    //   },
    // },

    // {
    //   name: "firefox",
    //   use: {
    //     channel: "chrome",
    //     viewport: null,
    //     launchOptions: {
    //       args: ['--start-maximized'],
    //       ignoreDefaultArgs: ["--window-size=1280,720"],
    //     },
    //   },
    // },

    // {
    //   name: "WebKit",
    //   use: {
    //     channel: "WebKit",
    //     viewport: null,
    //     launchOptions: {
    //       args: ['--start-maximized'],
    //       ignoreDefaultArgs: ["--window-size=1280,720"],
    //     },
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: "Microsoft Edge",
    //   use: {
    //     channel: "msedge",
    //     viewport: null,
    //     launchOptions: {
    //       args: ['--start-maximized'],
    //       ignoreDefaultArgs: ["--window-size=1280,720"],
    //     },
    //   },
    // },
    {
      name: "Google Chrome",
      use: {
        channel: "chrome",
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
          ignoreDefaultArgs: ["--window-size=1280,720"],
        },
      },
    },
  ],
});
