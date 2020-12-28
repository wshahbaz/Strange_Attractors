let attractor = {
  name: "Chen",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "3d"],
  functions: {
    //parameter order: [alpha, beta, delta]
    x: function(p) {
      return function(x, y, z) {
        return p[0]*x - y*z
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return p[1]*y + x*z
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return p[2]*z + x*y/3.0
      }
    }
  },
  variations: [
    {
      paramsStable: [5, -10, -0.38],
      iterStable: 10000,
      tolStable: 100,
      transWidth: 2,
      transLength: 2,
      transHeight: 1.4,
      scale: 35,
      initVals: [-7.0, -5.0, -10.0],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [-7.0, -5.0, -10.0],
      // initVals3D: [0.0321, 0.3106, -0.2189],
      scale3d: 40,
      dt: 1/150.0,
      maxLength: 10000,
      plotSpeed: 25,
      trans3Dx: -20,
      trans3Dy: -80,
      trans3Dz: 0,
      rotate3Dx: 180,
      rotate3Dy: 60,
      rotate3Dz: 30,
    },
  ],
}

export {attractor};

