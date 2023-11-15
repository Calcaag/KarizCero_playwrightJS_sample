/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type pageObjects_sample = typeof import('./pages/pageObjects_sample.js');
type dataConfig_sample = typeof import('./data-config/data-config_sample.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, pageObjects_sample: pageObjects_sample, dataConfig_sample: dataConfig_sample }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
