let attractor = {
  name: "Tinkerbell",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return x**2 - y**2 + p[0]*x + p[1]*y
      }
    },
    y: function(p) {
      return function(x, y) {
        return 2*x*y + p[2]*x + p[3]*y
      }
    }
  },
  equations: [
    `$x_{n+1} = x^2 - y^2 + ax + by$`,
    `$y_{n+1} = 2xy + cx + dy$`,
  ],
  variations: [
    {
      paramsStable: [0.9, -0.6013, 2.0, 0.5],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 1.75,
      transHeight: 1.6,
      scale: 3,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
  ],
}

export {attractor};

