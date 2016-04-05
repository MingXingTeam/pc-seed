require.config({
	  baseUrl: '/static',
  // 加载模块时间 超时会报错
  //waitSeconds: 0,
  paths: {
    /*libs*/
    jquery: 'js/libs/jquery',
    lodash: 'js/libs/lodash',
    /*plubins*/
    mock: 'js/plugins/mock',
    webcam: 'js/plugins/webcam',
    /*modules*/
    placeholder: 'js/modules/placeholder',
    util: 'js/modules/util',
    myui: 'js/modules/ui',
    base: 'js/modules/base',
    global: 'js/modules/global',
    request: 'js/modules/request',
    server: 'js/modules/server',
    loginBoxCommon: 'js/modules/loginBoxCommon',

    login: 'js/modules/login',
    risk: 'js/modules/risk',
    bank: 'js/modules/bank',
    career: 'js/modules/career',
    electronic: 'js/modules/electronic',
    financing: 'js/modules/financing',
    financingKnow: 'js/modules/financing-know',
    identity: 'js/modules/identity',
    personal: 'js/modules/personal',
    career1: 'js/modules/career1',
    debt: 'js/modules/debt',
    account: 'js/modules/account'
  },
  shim: {
    jquery: {
      exports: '$'
    }
  }
});