let attractor = {
  name: "Henon",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return y + 1.0 - (1.4*x**2)
      }
    },
    y: function(p) {
      return function(x, y) {
        return 0.3*x
      }
    }
  },
  variations: [
    {
      // paramsStable: [Math.random()*6 - 3, Math.random()*6 - 3, Math.random()*2 - 0.5, Math.random()*2 - 0.5],
      paramsStable: [],
      iterStable: 7500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2.5,
      scale: 4,
      initVals: [1,1],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
  ],
}

export {attractor};

