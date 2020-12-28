let attractor = {
  name: "Hopalong 2",
  type: "2d",
    functions: {
      x: function(p) {
        return function(x, y) {
          return y - 1.0 - Math.sqrt(Math.abs(p[1]*x-p[2])) * Math.sign(x)
        }
      },
      y: function(p) {
        return function(x, y) {
          return p[0] - x - 1.0
        }
      }
    },
  variations: [
    {
      paramsStable: [7.169018234914956, 8.440158230861044, 2.560218751201483],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2,
      transHeight: 2.25,
      scale: 95,
      initVals: [0,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 1.7,
      weightTransHeight: 200,
    },
    {
      paramsStable: [7.8003811555940255, 0.13083720531985807, 8.15054365530467],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.1,
      transHeight: 2,
      scale: 115,
      initVals: [0,0],
      canTol: false,
      weightLow: 1.3,
      weightHigh: 2,
      weightTransHeight: 200,
    },
    {
      paramsStable: [9.700390742666945, 1.599531964105834, 7.899197128757075],
      iterStable: 12500,
      tolStable: 1000,
      transWidth: 2.1,
      transHeight: 2.2,
      scale: 120,
      initVals: [0,0],
      canTol: false,
      weightLow: 1,
      weightHigh: 1,
      weightTransHeight: 200,
    },

  ],
}

export {attractor};