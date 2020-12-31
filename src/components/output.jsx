import { React, Component } from 'react';
import styled from 'styled-components';
import P5Wrapper from 'react-p5-wrapper';
import { useP5 } from '@gen/react-use-p5';
import p5 from 'p5';
import theme from '../styles/theme';

const { globalPalette } = theme;

const StyledOutputContainer = styled.div`
  width: 100%;
  border-top: 15px solid ${globalPalette.veryLightGrey};
  border-right: 15px solid ${globalPalette.veryLightGrey};
  border-bottom: 15px solid ${globalPalette.veryLightGrey};
  // margin-bottom: 33px;
  background-color: #171515;
`;

const Output = (props) => {
  const [setRef] = useP5(sketcher(props));
    return (
      <StyledOutputContainer className="sketchContainer">
        {/* <P5Wrapper sketch={sketcher(this.props)} /> */}
        <div ref={setRef}> </div>
      </StyledOutputContainer>
    )
}

export default Output;


//------------------ Sketching functions ------------------//
  //returns a sketch function to be used to draw attractor
const  sketcher = (data) => {
    let attractor = data.attractor;
    let attr = data.variation;
    let params = data.params;
    let initVals = data.initVals;
    let plotView = data.view;
    let timeDelta = data.timeDelta;
    let numIter = data.numIter;

    const sketch = (p) => {
      let perm = [];
      let weight = 2;
      let height = 0;
      let width = 0;
      let attr_width = 0;
      let attr_height = 0;
      let fx;
      let fy;
      //3D
      let fz;
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
        height = container[0].offsetHeight - 33;

        attr_width = Math.min(width, height);
        attr_height = Math.min(height, width);
      }

      p.setup = function () {
        //get colour permutation
        perm = getRandPerm()
        console.log("attr", attractor.name, attr)

        //setup based on type of attractor drawing
        if (attractor.type == "2d") {
          fx = attractor.functions.x(params);
          fy = attractor.functions.y(params);
        } else if (attractor.type == "3d") {
          fx = attractor.functions.x(params);
          fy = attractor.functions.y(params);
          fz = attractor.functions.z(params);
        }

        //canvas setup
        if (attractor.type == "2d" || plotView != "3d") {
          p.createCanvas(width, height);
          p.noLoop();
        } else {
          //3d plot
          p.createCanvas(width, height - 4, p.WEBGL);
          p.frameRate(30);
          vec = p.createVector(initVals[0], initVals[1], initVals[2]);
          //choose rgb function
          let rgbCtrl = Math.round(Math.random());
          rgbFunc = (rgbCtrl) ? calcRGB : calcRGB3D;
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

          let x_prev = initVals[0];
          let y_prev = initVals[1];
          let x;
          let y;

          for (let i = 0; i < numIter; i++) {
            x = fx(x_prev, y_prev);
            y = fy(x_prev, y_prev);

            if (isNaN(x +y)) {
              p.clear();
              drawError();
              return;
            }

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

          let x_prev = initVals[0];
          let y_prev = initVals[1];
          let z_prev = initVals[2];
          let x, x_p;
          let y, y_p;
          let z, z_p;
          let h = timeDelta;

          for (let i = 0; i < numIter; i++) {
            x_p = fx(x_prev, y_prev, z_prev);
            y_p = fy(x_prev, y_prev, z_prev);
            z_p = fz(x_prev, y_prev, z_prev);
            x = x_prev + h * x_p;
            y = y_prev + h * y_p;
            z = z_prev + h * z_p;
            if (isNaN(x + y + z)) {
              console.log("not a numbers");
              p.clear();
              drawError();
              return;
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
          if (!p.frameRate()) return;

          p.orbitControl();  //requires looping
          p.background('#171515');
          p.translate(attr.trans3Dx, attr.trans3Dy, attr.trans3Dz);
          p.scale(attr_width / attr.scale3d);
          p.rotateX(attr.rotate3Dx);
          p.rotateY(attr.rotate3Dy);
          p.rotateZ(attr.rotate3Dz);

          if (plotCtrl) {
            for (let i = 0; i < attr.plotSpeed; i++) {
              const delta = p.createVector(fx(vec.x, vec.y, vec.z), fy(vec.x, vec.y, vec.z), fz(vec.x, vec.y, vec.z));
              delta.mult(timeDelta);
              vec.add(delta);

              if (isNaN(vec.x + vec.y + vec.z)) {
                console.log("not a numbers");
                p.clear();
                drawError();
                return;
              }

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
            // p.noLoop();
          }
        }

        //error msg
        const drawError = () => {
          console.log('Following Parameters/Init values resulted in an undefined value or infinity')
          p.background(`${globalPalette.slate}`)
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
          console.log("new container dimensions:", container[0].offsetWidth, container[0].offsetHeight)
          width = container[0].offsetWidth;
          height = container[0].offsetHeight;

          attr_width = Math.min(width, height);
          attr_height = Math.min(height, width);
          p.resizeCanvas(width-30, height-63);
        } else {
          console.log("error would occur...")
        }
      }
    }

    return sketch;
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
  let rPoint = Math.sqrt(xdiff ** 2 + ydiff ** 2 + z ** 2);
  let rGrid = Math.sqrt((w / 2) ** 2 + (h / 2) ** 2 + z ** 2);
  let B = Math.abs(rPoint - rGrid) / rGrid;
  return [parseInt(R * 255), parseInt(G * 255), parseInt(B * 20 * 255)];
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
