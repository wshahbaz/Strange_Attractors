let attractor = {
  name: "Four-Wing",
  type: "3d",
  plotViews: ["3d"],
  // plotViews: ["xy", "yx", "xz", "zx", "yz", "zy", "3d"],
  functions: {
    x: function(p) {
      let [a, b, c] = p;
      return function(x, y, z) {
        return a*x + y*z
      }
    },
    y: function(p) {
      let [a, b, c] = p;
      return function(x, y, z) {
        return b*x + c*y - x*z
      }
    },
    z: function(p) {
      let [a, b, c] = p;
      return function(x, y, z) {
        return -z - x*y
      }
    }
  },
  variations: [
    {
      paramsStable: [0.2, 0.01, -0.4],
      iterStable: 10000,
      tolStable: 100,
      transWidth: 2,
      transLength: 2,
      transHeight: 1.85,
      scale: 5,
      initVals: [1.3, -0.18, 0.01],
      canTol: false,
      weightLow: 1.4,
      weightHigh: 1.7,
      weightTransHeight: 200,
      initVals3D: [1.3, -0.18, 0.01],
      scale3d: 7,
      dt: 1/60.0,
      maxLength: 11000,
      plotSpeed: 100,
      trans3Dx: 0,
      trans3Dy: 0,
      trans3Dz: 0,
      rotate3Dx: 1.36,
      rotate3Dy: 5.16,
      rotate3Dz: 3.06,
      // rotate3Dx: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dy: Math.round(Math.random()*2*Math.PI *100)/100,
      // rotate3Dz: Math.round(Math.random()*2*Math.PI *100)/100,
    },
  ],
}

export {attractor};

