let attractor = {
  name: "Fractel Dream 4",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return Math.sin(y*p[1]) + p[2]*Math.cos(x*p[1])
      }
    },
    y: function(p) {
      return function(x, y) {
        return Math.cos(x*p[0]) + p[3]*Math.sin(y*p[0])
      }
    }
  },
  variations: [
    {
      // paramsStable: [Math.random()*6 - 3, Math.random()*6 - 3, Math.random()*2 - 0.5, Math.random()*2 - 0.5],
      paramsStable: [ -2.232036968956165, -0.9409837035018, 0.15157226145409597, 1.0494515326978067],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2.1,
      scale: 5,
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
      transWidth: 1.9,
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
      transWidth: 1.86,
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
      transWidth: 2.15,
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