let attractor = {
  name: "Fractel Dream 1",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return Math.sin(y*p[1]) + p[2]*Math.sin(x*p[1])
      }
    },
    y: function(p) {
      return function(x, y) {
        return Math.sin(x*p[0]) + p[3]*Math.sin(y*p[0])
      }
    }
  },
  equations: [
    `$x_{n+1} = sin(by) + c \\times sin(bx)$`,
    `$y_{n+1} = sin(ax) + d \\times sin(ay)$`,
  ],
  variations: [
    {
      paramsStable: [-0.966918, 2.879879, 0.765145, 0.744728],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 4,
      initVals: [0.1,0.1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-2.8276, 1.2813, 1.9655, 0.597],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 6,
      initVals: [0.1,0.1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-1.1554, -2.3419, -1.9799, 2.1828],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 8,
      initVals: [0.1,0.1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-1.9956, -1.4528, -2.6206, 0.8517],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 7,
      initVals: [0.1,0.1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};