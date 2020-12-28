let attractor = {
  name: "Gumowski-Mira",
  type: "2d",
    functions: {
      x: function(p) {
        const G = (x, mu) => mu*x + 2*(1-mu)*(x**2) / (1.0 + x**2)
        return function(x, y) {
          //mu is p[2]
          return y + p[0]*(1.0 - p[1]*(y**2))*y + G(x,p[2])
        }
      },
      y: function(p) {
        const G = (x, mu) => mu*x + 2*(1-mu)*(x**2) / (1.0 + x**2)
        return function(x, y) {
          //mu is p[2]
          let xn = y + p[0]*(1.0 - p[1]*(y**2))*y + G(x,p[2])
          return -x + G(xn,p[2])
        }
      }
    },
  variations: [
    {
      paramsStable: [0.0, 0.5, -0.75],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 100,
      initVals: [0.1,0.1],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.008, 0.05, -0.496],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 50,
      initVals: [0,1],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.75,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.5, -0.7509],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 100,
      initVals: [0.1,0.1],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.5, -0.22],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 70,
      initVals: [0,1],
      canTol: false,
      weightLow: 0.5,
      weightHigh: 0.8,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.008, 0.05, -0.9],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 50,
      initVals: [0,1],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.008, 0.05, -0.45],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.2,
      transHeight: 2,
      scale: 25,
      initVals: [0,1],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.008, 0.05, 0.16],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2.1,
      transHeight: 2,
      scale: 23,
      initVals: [0.1,0.1],
      canTol: false,
      weightLow: 1,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.008, 0.05, -0.7],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.1,
      transHeight: 2,
      scale: 35,
      initVals: [0,0.5],
      canTol: true,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.05, -0.2],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.15,
      transHeight: 2,
      scale: 35,
      initVals: [0.5,1],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.05, -0.22],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.1,
      transHeight: 2,
      scale: 55,
      initVals: [0.5,0.5],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.05, -0.31],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 120,
      initVals: [0,0.5],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.05, -0.55],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.2,
      transHeight: 2,
      scale: 50,
      initVals: [0,0.5],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.05, -0.23],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 60,
      initVals: [0.5,0.5],
      canTol: false,   //unstable
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.009, 0.05, 0.32],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.2,
      transHeight: 2,
      scale: 22,
      initVals: [0.5,0.5],
      canTol: true,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0.5, -0.65],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.15,
      transHeight: 2,
      scale: 55,
      initVals: [0.1,0.1],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0, -0.578],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.2,
      transHeight: 2,
      scale: 70,
      initVals: [0,0.5],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0, -0.604],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.2,
      transHeight: 2,
      scale: 50,
      initVals: [0,0.5],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0, 0.228],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.3,
      transHeight: 2,
      scale: 17,
      initVals: [0,0.5],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [0.0, 0, -0.002],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 1.95,
      scale: 107,
      initVals: [0,0.5],
      canTol: false,  //unstable (offscreen)
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [ 0.0, 0, -0.623],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 95,
      initVals: [0,0.5],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};