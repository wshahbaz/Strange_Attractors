let attractor = {
  name: "Sprott",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    x: function(p) {
      let [a, b] = p;
      return function(x, y, z) {
        return y + a*x*y + x*z
      }
    },
    y: function(p) {
      let [a, b] = p;
      return function(x, y, z) {
        return 1.0 - b*(x**2) + y*z
      }
    },
    z: function(p) {
      let [a, b] = p;
      return function(x, y, z) {
        return x - x**2 - y**2
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = y + axy + xz$`,
    `$\\frac{dy}{dt} = 1 - bx^2 + yz$`,
    `$\\frac{dz}{dt} = x - x^2 - y^2$`,
  ],
  variations: [
    {
      paramsStable: [2.07, 1.79],
      iterStable: 10000,
      tolStable: 100,
      transWidth: 3.5,
      transLength: 2,
      transHeight: 1.85,
      scale: 3,
      initVals: [0.63, 0.47, -0.54],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [0.63, 0.47, -0.54],
      scale3d: 3,
      dt: 1/70.0,
      maxLength: 4500,
      plotSpeed: 25,
      trans3Dx: 40,
      trans3Dy: 0,
      trans3Dz: 0,
      rotate3Dx: 4.52,
      rotate3Dy: 3.17,
      rotate3Dz: 1.07,
      // rotate3Dx: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dy: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dz: Math.round(Math.random()*2*Math.PI *100)/100,
    },
  ],
}

export {attractor};

