(function () {
  var VueD3 = {};
  var D3 = typeof require === 'function'
    ? require('d3')
    : window.D3;

  if (!D3) {
    throw new Error('[vue-d3] cannot locate d3');
  }

  VueD3.install = function (Vue) {
    Vue.prototype.$d3 = D3;
  };

  if (typeof exports == 'object') {
    module.exports = VueD3;
  } else if (typeof define == 'function' && define.amd) {
    define([], function(){ return VueD3; })
  } else if (window.Vue) {
    window.VueD3 = VueD3;
    Vue.use(VueD3);
  }
})();
