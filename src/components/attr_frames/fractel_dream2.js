let attractor = {
  name: "Fractel Dream 2",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return Math.cos(y*p[1]) + p[2]*Math.sin(x*p[1])
      }
    },
    y: function(p) {
      return function(x, y) {
        return Math.cos(x*p[0]) + p[3]*Math.sin(y*p[0])
      }
    }
  },
  equations: [
    `$x_{n+1} = cos(by) + c \\times sin(bx)$`,
    `$y_{n+1} = cos(ax) + d \\times sin(ay)$`,
  ],
  variations: [
    {
      // paramsStable: [Math.random()*6 - 3, Math.random()*6 - 3, Math.random()*2 - 0.5, Math.random()*2 - 0.5],
      paramsStable: [-2.292034034426555, -2.292034034426555, -0.19548408135026474, 1.3564719320045664],
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
      paramsStable: [2.910532179630307,1.7262932663488169,0.9523238059367984,1.392274024387799],
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
    {
      paramsStable: [2.960173196807803,-1.2447946368729284, -0.45874340654417445, 0.8123297471253825],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.1,
      transHeight: 2,
      scale: 5,
      initVals: [0.1,0.1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [ -1.3367471276859257, 2.024462905258784, -0.23402030522823392, 0.9122088557639825],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2.5,
      scale: 4,
      initVals: [0.1,0.1],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};