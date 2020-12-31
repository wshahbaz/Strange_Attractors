import {React, Component} from 'react';
import styled from 'styled-components';
import attractors from './attr_frames';
import VIEWS from '../data/views';

import Menu from './menu';
import Output from './output';

const StyledMainContainer = styled.div`
  display: flex;
`;

class Main extends Component {
  constructor(props) {
    super(props);

    let attractor, params, initVals, variation, varNumber, view, timeDelta, numIter;

    //get attractor and init fields
    attractor = attractors[Math.floor(Math.random() * attractors.length)];
    varNumber = Math.floor(Math.random() * attractor.variations.length)
    variation = attractor.variations[varNumber];
    if (attractor.type == "2d") {
      params = variation.paramsStable;
      initVals = variation.initVals;
      numIter = variation.iterStable;
    } else if (attractor.type == "3d") {
      params = variation.paramsStable;
      initVals = variation.initVals3D;
      timeDelta = variation.dt;
      numIter = variation.iterStable;
      view = VIEWS[Math.floor(Math.random() * VIEWS.length)]
      console.log("timeDelta: ", timeDelta)
    }

    this.state = {
      attractor: attractor,
      params: params,
      initVals: initVals,
      variation: variation,
      view: view,
      timeDelta: timeDelta,
      varNumber: varNumber,
      numIter: numIter
    };
  }

  handleAttractorChange = (newAttr) => {
    console.log("new attr", newAttr);
    let randVarNum = Math.floor(Math.random() * newAttr.variations.length);
    let randVar = newAttr.variations[randVarNum];
    let params = randVar.paramsStable;
    let initVals = (newAttr.type == "2d")? randVar.initVals : randVar.initVals3D;
    let view = (newAttr.type == "2d")? null : VIEWS[Math.floor(Math.random() * VIEWS.length)];
    let timeDelta = (newAttr.type == "2d")? null : randVar.dt;
    console.log("new variation number: ", randVarNum);
    this.setState({
      attractor: newAttr,
      params: params,
      initVals: initVals,
      variation: randVar,
      view: view,
      timeDelta: timeDelta,
      varNumber: randVarNum,
    });
  }

  handleVariationChange = (newVarNumber) => {
    console.log("new variation num", newVarNumber);
    let newVariation = this.state.attractor.variations[newVarNumber];
    let newParams = newVariation.paramsStable;
    let newInitVals = newVariation.initVals;
    this.setState({
      variation: newVariation,
      params: newParams,
      initVals: newInitVals,
      varNumber: newVarNumber
    })
  }

  handleViewChange = (newView) => {
    console.log("new view", newView);
    this.setState({
      view: newView,
    })
  }

  handleRender = (newState) => {
    //renders push state of params, initVals, deltaTime (if exists)
    //only need to update deltatime (others update since arr references)
    console.log("new states: ", newState);
    console.log("current state: ", this.state);
    this.setState({
      timeDelta: newState.currTimeDelta,
      numIter: newState.currNumIter
    })
  }

  render() {
    console.log("render happening")
    console.log("curr state", this.state)
    return (
      <StyledMainContainer>
        <Menu 
          attractor={this.state.attractor}
          params={this.state.params}
          initVals={this.state.initVals}
          variation={this.state.variation}
          view={this.state.view}
          timeDelta={this.state.timeDelta}
          varNumber={this.state.varNumber}
          numIter={this.state.numIter}
          changeAttractor={this.handleAttractorChange}
          changeVariation={this.handleVariationChange}
          changeView={this.handleViewChange}
          renderAttr={this.handleRender}
        />
        <Output 
          attractor={this.state.attractor}
          params={this.state.params}
          initVals={this.state.initVals}
          variation={this.state.variation}
          view={this.state.view}
          timeDelta={this.state.timeDelta}
          numIter={this.state.numIter}
        />
      </StyledMainContainer>
    )
  }
}

export default Main;