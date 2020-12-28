let attractor = {
  name: "Fractel Dream 3",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return Math.cos(y*p[1]) + p[2]*Math.cos(x*p[1])
      }
    },
    y: function(p) {
      return function(x, y) {
        return Math.cos(x*p[0]) + p[3]*Math.cos(y*p[0])
      }
    }
  },
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
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [2.910532179630307,1.7262932663488169,0.9523238059367984,1.392274024387799],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 1.85,
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
      paramsStable: [ -2.7037718889650195, 0.8929230168025875, 1.3197901866668587, 1.0727440190692255],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.3,
      transHeight: 2.2,
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