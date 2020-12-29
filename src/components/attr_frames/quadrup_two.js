let attractor = {
  name: "Quadrup Two",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        let tmp = Math.abs(p[2]*x-p[1])
        return y - Math.sign(x) * Math.sin(Math.log(Math.abs(p[1]*x-p[2]))) * Math.atan(tmp**2)
      }
    },
    y: function(p) {
      return function(x, y) {
        return p[0]-x
      }
    }
  },
  equations: [
    `$x_{n+1} = y - sign(x) \\times sin(ln|bx - c|) \\times atan(|cx - b|^2)$`,
    `$y_{n+1} = a - x$`,
  ],
  variations: [
    {
      // paramsStable: [Math.random()*6 - 3, Math.random()*6 - 3, Math.random()*2 - 0.5, Math.random()*2 - 0.5],
      paramsStable: [34, 1, 5],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.7,
      transHeight: 3.1,
      scale: 100,
      initVals: [0,0],
      canTol: false,
      weightLow: 0.2,
      weightHigh: 0.5,
      weightTransHeight: 200,
    },
    {
      // paramsStable: [Math.random()*6 - 3, Math.random()*6 - 3, Math.random()*2 - 0.5, Math.random()*2 - 0.5],
      paramsStable: [10, 10, 5],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.05,
      transHeight: 2.1,
      scale: 300,
      initVals: [0,0],
      canTol: false,
      weightLow: 0.2,
      weightHigh: 0.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [10, 1, 5],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.3,
      transHeight: 2.7,
      scale: 50,
      initVals: [0,0],
      canTol: false,
      weightLow: 0.2,
      weightHigh: 0.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [34, 34, 3],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.4,
      transHeight: 3,
      scale: 150,
      initVals: [0,0],
      canTol: true,
      weightLow: 0.2,
      weightHigh: 0.5,
      weightTransHeight: 200,
    },
  ],
}

export {attractor};

