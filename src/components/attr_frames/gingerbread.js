let attractor = {
  name: "Gingerbread Man",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return 1.0 - y + Math.abs(x)
      }
    },
    y: function(p) {
      return function(x, y) {
        return x
      }
    }
  },
  variations: [
    {
      // paramsStable: [Math.random()*6 - 3, Math.random()*6 - 3, Math.random()*2 - 0.5, Math.random()*2 - 0.5],
      paramsStable: [],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.4,
      transHeight: 2.9,
      scale: 18,
      initVals: [-0.1,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },


  ],
}

export {attractor};