exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.saucedemo.com/",
      show: true,
      restart: "keep",
      keepBrowserState: true,
      keepCookies: true,
      getPageTimeout: 200000,
      waitForAction: 1000,
      pressKeyDelay: 150,
    },
  },
  include: {
    I: "./steps_file.js",
    ...require("./exportPages.js"),
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step-defintions/BDD_sample_steps.js"],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    retryTo: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./*_test.js",
  name: "karizShaneCero_JS_sample",
};
