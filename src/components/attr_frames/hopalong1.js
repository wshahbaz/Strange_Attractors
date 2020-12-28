let attractor = {
  name: "Hopalong 1",
  type: "2d",
    functions: {
      x: function(p) {
        return function(x, y) {
          return y - Math.sqrt(Math.abs(p[1] * x - p[2])) * Math.sign(x)
        }
      },
      y: function(p) {
        return function(x, y) {
          return p[0] - x
        }
      }
    },
  variations: [
    {
      paramsStable: [2.0024573111008506, 0.9957158590496218, -0.008238666645837993],
      iterStable: 12500,
      tolStable: 100,
      transWidth: 2.2,
      transHeight: 3.5,
      scale: 7,
      initVals: [0,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-11.009870138246251, 0.05382308528144812, 0.5001964478545817],
      iterStable: 12500,
      tolStable: 100,
      transWidth: 1.60,
      transHeight: 1.5,
      scale: 30,
      initVals: [0,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [2.000869448300742, 0.04939775912657822, 2.000229824841755],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.1,
      transHeight: 1.9,
      scale: 25,
      initVals: [0,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [1.1, 0.5, 1.0],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 40,
      initVals: [0,0],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};