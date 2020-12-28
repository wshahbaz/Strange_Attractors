let attractor = {
  name: "Dadras",
  type: "3d",
  plotViews: ["xy", "yx", "yz", "zy", "3d"],
  functions: {
    x: function(p) {
      return function(x, y, z) {
        return y - p[0]*x + p[1]*y*z
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return p[2]*y - x*z + z
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return p[3]*x*y - p[4]*z
      }
    }
  },
  variations: [
    {
      paramsStable: [3.0, 2.7, 1.7, 2.0, 9.0],
      iterStable: 6000,
      tolStable: 100,
      transWidth: 2.2,
      transLength: 2,
      transHeight: 2,
      scale: 24,
      initVals: [1.1, 2.1, -2.0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [1.1, 2.1, -2.0],
      // initVals3D: [0.0321, 0.3106, -0.2189],
      scale3d: 45,
      dt: 1/60.0,
      maxLength: 10000,
      plotSpeed: 15,
      trans3Dx: 15,
      trans3Dy: 0,
      trans3Dz: 0,
      rotate3Dx: 0,
      rotate3Dy: -5,
      rotate3Dz: -3,
    },
  ],
}

export {attractor};

