let attractor = {
  name: "Ikeda",
  type: "2d",
  functions: {
    //parameters in format [u]
    x: function(p) {
      return function(x, y) {
        let t = 0.4 - 6/(1.0 + x**2 + y**2)
        return 1.0 + p[0]*(x*Math.cos(t) - y*Math.sin(t))
      }
    },
    y: function(p) {
      return function(x, y) {
        let t = 0.4 - 6/(1.0 + x**2 + y**2)
        return p[0]*(x*Math.sin(t) + y*Math.cos(t))
      }
    }
  },
  equations: [
    `$t = 0.4 - 6/(1 + x^2 + y^2)$`,
    `$x_{n+1} = 1 + a(x \\times cos(t) - y \\times sin(t)$`,
    `$y_{n+1} = a(x \\times sin(t) + y \\times cos(t)$`,
  ],
  variations: [
    {
      paramsStable: [0.86 + Math.random()*40/1000],
      iterStable: 8500,
      tolStable: 100,
      transWidth: 2.7,
      transHeight: 1.6,
      scale: 4,
      initVals: [0,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};

