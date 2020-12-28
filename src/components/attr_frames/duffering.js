let attractor = {
  name: "Duffering",
  type: "2d",
  functions: {
    //parameters in format [epsillon, k, mu]
    x: function(p) {
      return function(x, y) {
        return y
      }
    },
    y: function(p) {
      return function(x, y) {
        return -p[1]*x + p[0]*y - y**3
      }
    }
  },
  variations: [
    {
      paramsStable: [2.75, 0.2],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 5,
      initVals: [0.1,0.3],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};

