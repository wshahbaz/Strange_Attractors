let attractor = {
  name: "Three-Scroll Unified Chaotic System",
  type: "3d",
  plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    //parameter order: [a, b, c, d, e, f]
    x: function(p) {
      let [a, b, c, d, e, f] = p;
      return function(x, y, z) {
        return a*(y-x) + d*x*z
      }
    },
    y: function(p) {
      let [a, b, c, d, e, f] = p;
      return function(x, y, z) {
        return b*x - x*z + f*y
      }
    },
    z: function(p) {
      let [a, b, c, d, e, f] = p;
      return function(x, y, z) {
        return c*z + x*y - e*Math.pow(x, 2)
      }
    }
  },
  equations: [
    `$\\frac{dx}{dt} = a(y-x) + dxz$`,
    `$\\frac{dy}{dt} = bx - xz + fy$`,
    `$\\frac{dz}{dt} = cz + xy - ex^2$`,
  ],
  variations: [
    {
      // paramsStable: [32.48, 45.84, 1.18, 0.13, 0.57, 14.7],
      paramsStable: [40.0, 55.0, 1.833, 0.16, 0.65, 20.0],
      iterStable: 10000,
      tolStable: 1000,
      transWidth: 2,
      transLength: 2,
      transHeight: 3.5,
      scale: 400,
      initVals: [-0.29, -0.25, -0.59],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [-0.29, -0.25, -0.59],
      // initVals3D: [0.0321, 0.3106, -0.2189],
      scale3d: 525,
      dt: 0.00025,
      maxLength: 10000,
      plotSpeed: 50,
      trans3Dx: 40,
      trans3Dy: 60,
      trans3Dz: 0,
      rotate3Dx: 5.04,
      rotate3Dy: 3.72,
      rotate3Dz: 0.5,
      //0.71
      // rotate3Dx: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dy: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dz: Math.round(Math.random()*2*Math.PI *100)/100,
    },
  ],
}

export {attractor};

