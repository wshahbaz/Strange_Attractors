let attractor = {
  name: "Svennson",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return p[3] * Math.sin(x*p[0]) - Math.sin(y*p[1])
      }
    },
    y: function(p) {
      return function(x, y) {
        return p[2] * Math.cos(x*p[0]) + Math.cos(y*p[1])
      }
    }
  },
  equations: [
    `$x_{n+1} = d \\times sin(ax) - sin(by)$`,
    `$y_{n+1} = c \\times cos(ax) - cos(by)$`,
  ],
  variations: [
    {
      paramsStable: [1.5, -1.8, 1.6, 0.9],
      iterStable: 8500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 6,
      initVals: [0,0],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-0.91, -1.29, -1.97, -1.56],
      iterStable: 8500,
      tolStable: 1000,
      transWidth: 1.8,
      transHeight: 1.75,
      scale: 7.5,
      initVals: [0,0],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [1.4, 1.56, 1.4, -6.56],
      iterStable: 8500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 15,
      initVals: [0,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};