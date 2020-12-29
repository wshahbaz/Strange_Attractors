let attractor = {
  name: "Rabinovich-Fabrikant",
  type: "3d",
  plotViews: ["xy", "yx", "yz", "3d"],
  functions: {
    //parameter order: [alpha, gamma]
    x: function(p) {
      return function(x, y, z) {
        return y*(z - 1.0 + x**2) + p[1]*x
      }
    },
    y: function(p) {
      return function(x, y, z) {
        return x*(3*z +1.0 -x**2) + p[1]*y
      }
    },
    z: function(p) {
      return function(x, y, z) {
        return -2*z *(p[0] + x*y)
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = y(z - 1 + x^2) + bx$`,
    `$\\frac{dy}{dt} = x(3z + 1 - x^2) + by$`,
    `$\\frac{dz}{dt} = -2z(a + xy)$`,
  ],
  variations: [
    {
      paramsStable: [0.14, 0.10],
      iterStable: 10000,
      tolStable: 100,
      transWidth: 2,
      transLength: 2,
      transHeight: 1.85,
      scale: 8,
      initVals: [-1.0, 0.0, 0.5],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [-1.0, 0.0, 0.5],
      scale3d: 10,
      dt: 1/40.0,
      maxLength: 4000,
      plotSpeed: 15,
      trans3Dx: 10,
      trans3Dy: 0,
      trans3Dz: 0,
      // rotate3Dx: 0.66,
      // rotate3Dy: 0.1,
      // rotate3Dz: 4.65,
      // rotate3Dx: 2.05,
      // rotate3Dy: 0.06,
      // rotate3Dz: 5.14,
      rotate3Dx: 3.6,
      rotate3Dy: 3.05,
      rotate3Dz: 4.72,      
      // rotate3Dx: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dy: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dz: Math.round(Math.random()*2*Math.PI *100)/100,
    },
  ],
}

export {attractor};

