let attractor = {
  name: "Lorenz",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    //parameters in format [sigma, rho, beta]
    x: function(p) {
      return function(x, y, z) {
        return p[0]*(-x + y)
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return -x*z + p[1]*x - y
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return x*y - p[2]*z
      }
    }
  },
  variations: [
    {
      paramsStable: [10, 28, 8.0/3],
      iterStable: 15000,
      tolStable: 100000,
      transWidth: 2,
      transLength: 1.9,
      transHeight: 15,
      scale: 60,
      scale3d: 150,
      initVals: [1.1, 2.05, 7.00],
      initVals3D: [1.1, 2.0, 7.00],
      canTol: false,
      weightLow: 1.2,
      weightHigh: 1.7,
      weightTransHeight: 200,
      dt: 1/90.0,
      maxLength: 1500,
      plotSpeed: 4,
      trans3Dx: 0,
      trans3Dy: 0,
      trans3Dz: 0,
      rotate3Dx: 0,
      rotate3Dy: 0,
      rotate3Dz: 0,
    },
  ],
}

export {attractor};

