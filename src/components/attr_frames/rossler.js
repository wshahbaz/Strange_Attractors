let attractor = {
  name: "Rossler",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "yz", "3d"],
  functions: {
    //parameter order: [a, b, c]
    x: function(p) {
      return function(x, y, z) {
        return -(y + z)
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return x + p[0]*y
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return p[1] + z*(x - p[2])
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = -(y+z)$`,
    `$\\frac{dy}{dt} = x + ay$`,
    `$\\frac{dz}{dt} = b + z(x-c)$`,
  ],
  variations: [
    {
      paramsStable: [0.2, 0.2, 5.7],
      iterStable: 10000,
      tolStable: 100,
      transWidth: 2,
      transLength: 2,
      transHeight: 8,
      scale: 35,
      initVals: [10.0, 0.0, 10.0],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [10.0, 0.0, 10.0],
      scale3d: 80,
      dt: 1/35.0,
      maxLength: 4000,
      plotSpeed: 15,
      trans3Dx: 0,
      trans3Dy: 70,
      trans3Dz: 0,
      rotate3Dx: 1,
      rotate3Dy: 0,
      rotate3Dz: 3.5,
    },
  ],
}

export {attractor};

