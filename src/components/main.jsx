import {React, Component} from 'react';
import styled from 'styled-components';
import attractors from './attr_frames';
import VIEWS from '../data/views';

import Menu from './menu';
import Output from './output';

const StyledMainContainer = styled.div`
  display: flex;
  
`;

const getRandVar = (attr) => {
  let randAttrs = attr.variations;
  return randAttrs[Math.floor(Math.random() * randAttrs.length)];
}

class Main extends Component {
  constructor(props) {
    super(props);

    let attractor, params, initVals, variation, varNumber, view, timeDelta;

    //get attractor and init fields
    attractor = attractors[Math.floor(Math.random() * attractors.length)];
    varNumber = Math.floor(Math.random() * attractor.variations.length)
    variation = attractor.variations[varNumber];
    if (attractor.type == "2d") {
      params = variation.paramsStable;
      initVals = variation.initVals;
    } else if (attractor.type == "3d") {
      params = variation.paramsStable;
      initVals = variation.initVals3D;
      timeDelta = variation.dt;
      view = VIEWS[Math.floor(Math.random() * VIEWS.length)]
      console.log("view: ", view)
    }

    this.state = {
      attractor: attractor,
      params: params,
      initVals: initVals,
      variation: variation,
      view: view,
      timeDelta: timeDelta,
      varNumber: varNumber,
    };
  }

  render() {
    return (
      <StyledMainContainer>
        <Menu 
          attractor={this.state.attractor}
          params={this.state.params}
          initVals={this.state.initVals}
          variation={this.state.variation}
          view={this.state.view}
          timeDelta={this.state.viewDelta}
          varNumber={this.state.varNumber}
        />
        <Output 
          attractor={this.state.attractor}
          params={this.state.params}
          initVals={this.state.initVals}
          variation={this.state.variation}
          view={this.state.view}
          timeDelta={this.state.viewDelta}
        />
      </StyledMainContainer>
    )
  }
}

export default Main;