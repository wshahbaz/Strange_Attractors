const calcPoint = (x, y, a, b, g, om, l, d) => {
  let zzbar = x**2 + y**2;
  let p = a*zzbar + l;
  let zreal = x, zimag = y;
  
  for (let i = 1; i < d-1; i++) {
    let za = zreal*x - zimag*y;
    let zb = zimag*x + zreal*y;
    zreal = za;
    zimag = zb;
  }

  let zn = x*zreal - y*zimag;
  p += b*zn;

  return [p*x + g*zreal - om*y, p*y - g*zimag + om*x]
}

let attractor = {
  name: "Symmetric Icon",
  type: "2d",
  functions: {
    x: function(p) {
      return function(x, y) {
        return calcPoint(x,y, p[0], p[1], p[2], p[3], p[4], p[5])[0];
      }
    },
    y: function(p) {
      return function(x, y) {
        return calcPoint(x,y, p[0], p[1], p[2], p[3], p[4], p[5])[1];
      }
    }
  },
  variations: [
    {
      paramsStable: [1.8, 0.0, 1.0, 0.1, -1.93, 5],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 2.75,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1,
      weightHigh: 1.5,
      weightTransHeight: 200,
    },
    {
      paramsStable: [5.0, -1.0, 1.0, 0.188, -2.5, 5],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 2,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-1.0, 0.1, -0.82, 0.12, 1.56, 3],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 3.5,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [1.806, 0.0, 1.0, 0.0, -1.806, 5],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 2,
      initVals: [0.01,0.01],
      canTol: false,   //semi-unstable
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [10.0, -12.0, 1.0, 0.0, -2.195, 3],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 1,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-2.5, 0.0, 0.9, 0.0, 2.5, 3],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 3,
      initVals: [0.01,0.01],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [3.0, -16.79, 1.0, 0.0, -2.05, 9],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 2,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [5.0, 1.5, 1.0, 0.0, -2.7, 6],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 2,
      initVals: [0.01,0.01],
      canTol: Math.round(Math.random()),
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [1.0, -0.1, 0.167, 0.0, -2.08, 7],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 3,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-2.0, 0.0, -0.5, 0.0, 2.6, 5],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 3,
      initVals: [0.01,0.01],
      canTol: Math.round(Math.random()),
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [2.0, 0.2, 0.1, 0.0, -2.34, 5],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 3,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7 ,
      weightTransHeight: 200,
    },
    {
      paramsStable: [2.0, 0.0, 1.0, 0.1, -1.86, 4],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 2.25,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2 ,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-1.0, 0.1, -0.82, 0.0, 1.56, 3],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 3,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7 ,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-1.0, 0.03, -0.8, 0.0, 1.455, 3],
      iterStable: 10000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 3,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7 ,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-2.5, -0.1, 0.9, -0.15, 2.39, 16],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 2,
      initVals: [0.01,0.01],
      canTol: false,
      weightLow: 0.8,
      weightHigh: 1.7 ,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};