let attractor = {
  name: "Sinai",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return (x + y + p[0]*Math.cos(2*Math.PI*y)) % 1
      }
    },
    y: function(p) {
      return function(x, y) {
        return (x + 2*y) % 1
      }
    }
  },
  variations: [
    {
      paramsStable: [-1 * (Math.random()+1)],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2.5,
      scale: 2,
      initVals: [0.1,0.5],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1,
      weightTransHeight: 200,
    },
  ],
}

export {attractor};

