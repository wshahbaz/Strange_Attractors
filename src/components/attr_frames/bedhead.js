let attractor = {
  name: "Bedhead",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return Math.sin(x*y/p[1])*y + Math.cos(p[0]*x-y)
      }
    },
    y: function(p) {
      return function(x, y) {
        return x + Math.sin(y)/p[1]
      }
    }
  },
  equations: [
    `$x_{n+1} = y \\times sin(xy/b) + cos(ax - y)$`,
    `$y_{n+1} = x + sin(y)/b$`,
  ],
  variations: [
    {
      paramsStable: [-0.81, -0.92],
      iterStable: 8500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 5,
      initVals: [1,1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-0.64, 0.76],
      iterStable: 8500,
      tolStable: 1000,
      transWidth: 1.92,
      transHeight: 1.85,
      scale: 12,
      initVals: [1,1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.6,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.06, 0.98],
      iterStable: 8500,
      tolStable: 1000,
      transWidth: 1.9,
      transHeight: 1.5,
      scale: 10,
      initVals: [1,1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-0.67, 0.83],
      iterStable: 8500,
      tolStable: 1000,
      transWidth: 2.65,
      transHeight: 22,
      scale: 3,
      initVals: [1,1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};