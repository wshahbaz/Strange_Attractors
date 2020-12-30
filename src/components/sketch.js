var attractors = require("./attr_frames");

function sketch(p) {
  let tolParams = [];
  let perm = [];
  let weight = 2;
  let height = 0;
  let width = 0;
  let attr_width = 0;
  let attr_height = 0;
  let attractor = {};
  let attr = {};
  let fx;
  let fy;
  //3D
  let fz;
  let plotView;
  let vec;
  let offset;
  let plotCtrl = true;
  let path = [];
  let rgbFunc;

  let container = document.getElementsByClassName('sketchContainer');
  console.log("the container stats");
  console.log(container);
  if (container && container[0]) {
    console.log(container);
    width = container[0].offsetWidth;
    height = container[0].offsetHeight;

    attr_width = Math.min(width, 1.3 * height);
    attr_height = Math.min(height, 1.3 * width);
  }

  p.setup = function () {
    //get colour permutation
    perm = getRandPerm()

    //get base attractor
    attractor = getRandAttractor();
    //get random variation
    attr = getRandVar(attractor);
    console.log("attr", attractor.name, attr)
    //get randomized params
    if (attr.canTol) {
      tolParams = attr.paramsStable.map(p => addTolerance(p, attr.tolStable))
      console.log("tol params:", tolParams)
    } else {
      tolParams = attr.paramsStable;
    }

    //setup based on type of attractor drawing
    if (attractor.type == "2d") {
      fx = attractor.functions.x(tolParams);
      fy = attractor.functions.y(tolParams);
    } else if (attractor.type == "3d") {
      fx = attractor.functions.x(tolParams);
      fy = attractor.functions.y(tolParams);
      fz = attractor.functions.z(tolParams);
      plotView = getRandPlotView(attractor);
    }

    //canvas setup
    if (attractor.type == "2d" || plotView != "3d") {
      p.createCanvas(width, height);
      p.noLoop();
    } else {
      //3d plot
      p.createCanvas(width, height - 4, p.WEBGL);
      p.frameRate(30);
      vec = p.createVector(attr.initVals3D[0], attr.initVals3D[1], attr.initVals3D[2]);
      //choose rgb function
      let rgbCtrl = Math.round(Math.random());
      if (rgbCtrl) {
        rgbFunc = calcRGB;
      } else {
        rgbFunc = calcRGB3D;
      }
      console.log("rotations:");
      console.log(`(${attr.rotate3Dx}, ${attr.rotate3Dy}, ${attr.rotate3Dz})`)
    }
    
    p.background('#171515');
    console.log("fx: ", fx);
  }

  p.draw = function () {

    //2d sketches
    const draw2D = () => {
      //base case
      if (height <= 0 || width <= 0) return;

      //adjust weight based on size of canvas
      if (height <= attr.weightTransHeight) weight = attr.weightLow;
      else weight = attr.weightHigh;

      //adjustments to canvas image
      p.strokeWeight(weight);
      p.translate(width / attr.transWidth, height / attr.transHeight);

      let x_prev = attr.initVals[0];
      let y_prev = attr.initVals[1];
      let x;
      let y;
  
      for (let i = 0; i < attr.iterStable; i++) {
        x = fx(x_prev, y_prev);
        y = fy(x_prev, y_prev);
  
        let rgb = calcRGB(x * attr_width / attr.scale, y * attr_height / attr.scale, width, height);
        p.stroke(rgb[perm[0]], rgb[perm[1]], rgb[perm[2]]);
        p.point(x * attr_width / attr.scale, y * attr_height / attr.scale);
  
        x_prev = x;
        y_prev = y;
      }
    }

    //3d sketches rendered in 2d
    const draw3Dto2D = (view) => {
      //base case
      if (height <= 0 || width <= 0) return;

      //adjust weight based on size of canvas
      if (height <= attr.weightTransHeight) weight = attr.weightLow;
      else weight = attr.weightHigh;

      //adjustments to canvas image
      p.strokeWeight(weight);
      //adjust based on view
      //plot based on view
      if (view == "xy") {
        p.translate(width / attr.transWidth, height / attr.transLength);
      } else if (view == "yx") {
        p.translate(width / attr.transLength, height / attr.transWidth);
      } else if (view == "xz") {
        p.translate(width / attr.transWidth, height / attr.transHeight);
      } else if (view == "zx") {
        p.translate(width / attr.transHeight, height / attr.transWidth);
      } else if (view == "yz") {
        p.translate(width / attr.transLength, height / attr.transHeight);
      } else if (view == "zy") {
        p.translate(width / attr.transHeight, height / attr.transLength);
      }
      // p.translate(width / attr.transWidth, height / attr.transHeight);

      let x_prev = attr.initVals[0];
      let y_prev = attr.initVals[1];
      let z_prev = attr.initVals[2];
      let x, x_p;
      let y, y_p;
      let z, z_p;
      let h = attr.dt;

      for (let i = 0; i < attr.iterStable; i++) {
        x_p = fx(x_prev, y_prev, z_prev);
        y_p = fy(x_prev, y_prev, z_prev);
        z_p = fz(x_prev, y_prev, z_prev);
        x = x_prev + h*x_p;
        y = y_prev + h*y_p;
        z = z_prev + h*z_p;
        if (isNaN(x+y+z)) {
          console.log("not a numbers");
        }
  
        let rgb = calcRGB(x * attr_width / attr.scale, y * attr_height / attr.scale, width, height);
        p.stroke(rgb[perm[0]], rgb[perm[1]], rgb[perm[2]]);
        //plot based on view
        if (view == "xy") {
          p.point(x * attr_width / attr.scale, y * attr_height / attr.scale);
        } else if (view == "yx") {
          p.point(y * attr_width / attr.scale, x * attr_height / attr.scale);
        } else if (view == "xz") {
          p.point(x * attr_width / attr.scale, z * attr_height / attr.scale);
        } else if (view == "zx") {
          p.point(z * attr_width / attr.scale, x * attr_height / attr.scale);
        } else if (view == "yz") {
          p.point(y * attr_width / attr.scale, z * attr_height / attr.scale);
        } else if (view == "zy") {
          p.point(z * attr_width / attr.scale, y * attr_height / attr.scale);
        }
  
        x_prev = x;
        y_prev = y;
        z_prev = z;
      }
    }

    //3d sketches
    const draw3D = () => {
      if (! p.frameRate()) return;

      // p.orbitControl();  //requires looping
      p.background('#171515');
      p.translate(attr.trans3Dx, attr.trans3Dy, attr.trans3Dz);
      p.scale(attr_width / attr.scale3d);
      p.rotateX(attr.rotate3Dx);
      p.rotateY(attr.rotate3Dy);
      p.rotateZ(attr.rotate3Dz);

      if (plotCtrl) {
        for (let i = 0; i < attr.plotSpeed; i++) {
          const delta = p.createVector(fx(vec.x, vec.y, vec.z), fy(vec.x, vec.y, vec.z), fz(vec.x, vec.y, vec.z));
          delta.mult(attr.dt);
          vec.add(delta);

          path.push(vec.copy());
          if (path.length > attr.maxLength) {
            path.splice(0, 1);
            ++offset;
          }
        }
      }

      p.strokeWeight(attr.weightHigh);
      p.stroke(255);
      p.noFill();
      let prev = path[0];
      for (let i = 1; i < path.length; ++i) {
        const next = path[i];
    
        let rgb = rgbFunc(prev.x, prev.y, prev.z, width, height);
        p.stroke(rgb[perm[0]], rgb[perm[1]], rgb[perm[2]]);
        p.line(prev.x, prev.y, prev.z, next.x, next.y, next.z);
        prev = next;
      }
    
      if (path.length >= attr.maxLength) {
        plotCtrl = false;
        p.noLoop();
      }
    }

    if (attractor.type == "2d") {
      draw2D();
    } else if (attractor.type == "3d") {
      if (plotView != "3d") draw3Dto2D(plotView);
      else draw3D();
    }

  }

  p.windowResized = function () {
    // console.log("window was resized!")
    if (container && container[0]) {
      // console.log("new container dimensions:", container[0].offsetWidth, container[0].offsetHeight)
      width = container[0].offsetWidth;
      height = container[0].offsetHeight;

      attr_width = Math.min(width, 1.3 * height);
      attr_height = Math.min(height, 1.3 * width);
      p.resizeCanvas(width, height);
    } else {
      console.log("error would occur...")
    }
  }
}

function calcRGB(x, y, w, h) {
  let midx = w / 2;
  let midy = h / 2;
  //get R = x diff
  let xdiff = Math.abs(x - midx)
  let R = xdiff / w;
  //get G = y diff
  let ydiff = Math.abs(y - midy)
  let G = ydiff / h;
  //get B = r diff
  let rPoint = Math.sqrt(xdiff ** 2 + ydiff ** 2);
  let rGrid = Math.sqrt((w / 2) ** 2 + (h / 2) ** 2);
  let B = Math.abs(rPoint - rGrid) / rGrid;
  return [parseInt(R * 255), parseInt(G * 255), parseInt(B * 20 * 255)];
}

function calcRGB3D(x, y, z, w, h) {
  let midx = w / 2;
  let midy = h / 2;
  //get R = x diff
  let xdiff = Math.abs(x - midx)
  let R = xdiff / w;
  //get G = y diff
  let ydiff = Math.abs(y - midy)
  let G = ydiff / h;
  //get B = r diff
  let rPoint = Math.sqrt(xdiff ** 2 + ydiff ** 2 + z**2);
  let rGrid = Math.sqrt((w / 2) ** 2 + (h / 2) ** 2 + z**2);
  let B = Math.abs(rPoint - rGrid) / rGrid;
  return [parseInt(R * 255), parseInt(G * 255), parseInt(B * 20 * 255)];
}

function addTolerance(p, factor) {
  let tol = (Math.random() * 2 - 1) / factor;
  return p + tol;
}

const getRandPerm = () => {
  let perms = [
    [1, 2, 0], [1, 0, 2], [2, 1, 0], [2, 0, 1], [0, 1, 2], [0, 2, 1],
    [1, 1, 2], [1, 2, 1], [2, 1, 1], [1, 1, 0], [1, 0, 1], [0, 1, 1],
    [2, 2, 1], [2, 1, 2], [1, 2, 2], [2, 2, 0], [2, 0, 2], [0, 2, 2],
    [0, 0, 1], [0, 1, 0], [1, 0, 0], [0, 0, 2], [0, 2, 0], [2, 0, 0],
  ]
  let item = perms[Math.floor(Math.random() * perms.length)];
  return item;
}

function getRandAttractor() {
  let attrs = attractors.default;
  return attrs[Math.floor(Math.random() * attrs.length)];
}

function getRandVar(attr) {
  let randAttrs = attr.variations;
  return randAttrs[Math.floor(Math.random() * randAttrs.length)];
}

function getRandPlotView(attractor) {
  let randViews = attractor.plotViews;
  return randViews[Math.floor(Math.random() * randViews.length)];
}

export default sketch;