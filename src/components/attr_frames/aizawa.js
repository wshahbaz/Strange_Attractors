let attractor = {
  name: "Aizawa",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    x: function(p) {
      let [a, b, c, d, e, f] = p;
      return function(x, y, z) {
        return (z-b)*x - d*y
      }
    },
    y: function(p) {
      return function(x, y, z) {
        let [a, b, c, d, e, f] = p;
        return d*x + (z-b)*y
      }
    },
    z: function(p) {
      return function(x, y, z) {
        let [a, b, c, d, e, f] = p;
        return c + a*z - (z**3)/3.0 - (x**2 + y**2)*(1.0 + e*z) + f*z*(x**3)
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = (z-b)x - dy$`,
    `$\\frac{dy}{dt} = dx + (z-b)y$`,
    `$\\frac{dz}{dt} = c + az - {z^3}/{3} - (x^2 + y^2)(1 + ez) + fzx^2$`,
  ],
  variations: [
    {
      paramsStable: [0.95, 0.7, 0.6, 3.5, 0.25, 0.1],
      iterStable: 15000,
      tolStable: 100,
      transWidth: 2,
      transLength: 2,
      transHeight: 2.6,
      scale: 4,
      initVals: [0.1, 1.0, 0.01],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [0.1, 1.0, 0.01],
      // initVals3D: [0.0321, 0.3106, -0.2189],
      scale3d: 5,
      dt: 1/89.0,
      maxLength: 10000,
      plotSpeed: 25,
      trans3Dx: 15,
      trans3Dy: 0,
      trans3Dz: -100,
      rotate3Dx: 21,
      rotate3Dy: 60,
      rotate3Dz: 30,
    },
  ],
}

export {attractor};

