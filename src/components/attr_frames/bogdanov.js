let attractor = {
  name: "Bogdanov",
  type: "2d",
  functions: {
    //parameters in format [epsillon, k, mu]
    x: function(p) {
      return function(x, y) {
        let yn = y + p[0]*y + p[1]*x*(x-1) + p[2]*x*y
        return x + yn
      }
    },
    y: function(p) {
      return function(x, y) {
        return y + p[0]*y + p[1]*x*(x-1) + p[2]*x*y
      }
    }
  },
  equations: [
    `$x_{n+1} = x + y_{n+1}$`,
    `$y_{n+1} = y + ay + bx(x-1) + cxy$`,
  ],
  variations: [
    {
      paramsStable: [-0.00028067006629673184, 1.1990230569427907, -0.000108451324518962],
      iterStable: 15000,
      tolStable: 100000,
      transWidth: 2,
      transHeight: 2,
      scale: 0.75,
      initVals: [0.1,0.3],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1,
      weightTransHeight: 200,
    },
    {
      paramsStable: [-0.001, 1.3, -0.1],
      iterStable: 15000,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2,
      scale: 1,
      initVals: [0.1,0.3],
      canTol: true,
      weightLow: 1.3,
      weightHigh: 1,
      weightTransHeight: 200,
    },
  ],
}

export {attractor};

