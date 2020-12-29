let attractor = {
  name: "Halvorsen",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    //parameter order: [a]
    x: function(p) {
      return function(x, y, z) {
        return -p[0]*x -4*y -4*z -y**2
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return -p[0]*y -4*z -4*x -z**2
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return -p[0]*z -4*x -4*y -x**2
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = -ax - 4y - 4z - y^2$`,
    `$\\frac{dy}{dt} = -ay - 4z - 4x - z^2$`,
    `$\\frac{dz}{dt} = -az - 4x - 4y - x^2$`,
  ],
  variations: [
    {
      paramsStable: [1.89],
      iterStable: 10000,
      tolStable: 100,
      transWidth: 1.8,
      transLength: 1.7,
      transHeight: 1.85,
      scale: 30,
      initVals: [-1.48, -1.51, 2.04],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [-1.48, -1.51, 2.04],
      scale3d: 50,
      dt: 1/100.0,
      maxLength: 4000,
      plotSpeed: 15,
      trans3Dx: 10,
      trans3Dy: 0,
      trans3Dz: 0,
      rotate3Dx: 2.94,
      rotate3Dy: 5.65,
      rotate3Dz: 5.33,
      // rotate3Dx: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dy: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dz: Math.round(Math.random()*2*Math.PI *100)/100,
    },
  ],
}

export {attractor};

