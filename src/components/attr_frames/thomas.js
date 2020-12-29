let attractor = {
  name: "Thomas",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    //parameters in format [sigma, rho, beta]
    x: function(p) {
      return function(x, y, z) {
        return Math.sin(y) - p[0]*x
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return Math.sin(z) - p[0]*y
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return Math.sin(x) - p[0]*z
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = sin(y) - ax$`,
    `$\\frac{dy}{dt} = sin(z) - ay$`,
    `$\\frac{dz}{dt} = sin(x) - az$`,
  ],
  variations: [
    {
      paramsStable: [0.208186],
      iterStable: 15000,
      tolStable: 100,
      transWidth: 2.7,
      transLength: 2.7,
      transHeight: 2.6,
      scale: 8,
      scale3d: 10,
      initVals: [1.1, 1.1, -0.01],
      initVals3D: [1.1, 1.1, -0.01],
      canTol: false,
      weightLow: 0.9,
      weightHigh: 1.2,
      weightTransHeight: 200,
      dt: 1/60.0,
      maxLength: 10500,
      plotSpeed: 35,
      trans3Dx: -40,
      trans3Dy: -50,
      trans3Dz: 0,
      rotate3Dx: 30,
      rotate3Dy: 0,
      rotate3Dz: 0,
    },
  ],
}

export {attractor};

