let attractor = {
  name: "Lorenz 84",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    //parameter order: [a, b, f, g]
    x: function(p) {
      return function(x, y, z) {
        return -p[0]*x - y**2 -z**2 + p[0]*p[2]
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return -y + x*y - p[1]*x*z + p[3]
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return -z + p[1]*x*y + x*z
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = -ax - y^2 - z^2 + ac$`,
    `$\\frac{dy}{dt} = -y + xy - bxz + d$`,
    `$\\frac{dz}{dt} = -z + bxy + xz$`,
  ],
  variations: [
    {
      paramsStable: [0.95, 7.91, 4.83, 4.66],
      iterStable: 10000,
      tolStable: 100,
      transWidth: 2,
      transLength: 2,
      transHeight: 2,
      scale: 8,
      initVals: [-0.2, -2.82, 2.71],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [-0.2, -2.82, 2.71],
      // initVals3D: [0.0321, 0.3106, -0.2189],
      scale3d: 13,
      dt: 1/90.0,
      maxLength: 4000,
      plotSpeed: 15,
      trans3Dx: 0,
      trans3Dy: 0,
      trans3Dz: 0,
      rotate3Dx: 0,
      rotate3Dy: 0.5,
      rotate3Dz: 0,
    },
  ],
}

export {attractor};

