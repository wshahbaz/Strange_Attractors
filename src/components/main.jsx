import {React, Component} from 'react';
import styled from 'styled-components';
import attractors from './attr_frames';
import VIEWS from '../data/views';
import * as _ from 'lodash';

import Menu from './menu';
import Output from './output';

const StyledMainContainer = styled.div`
  display: flex;
`;

class Main extends Component {
  constructor(props) {
    super(props);

    let attractorPtr, attractor, params, initVals, variation, variationPtr, varNumber, view, timeDelta, numIter;

    //get attractor and init fields
    attractorPtr = attractors[Math.floor(Math.random() * attractors.length)];
    attractor = _.cloneDeep(attractorPtr);
    varNumber = Math.floor(Math.random() * attractor.variations.length)
    variationPtr = attractor.variations[varNumber];
    variation = _.cloneDeep(variationPtr);
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

  handleAttractorChange = (newAttrPtr) => {
    let newAttr = _.cloneDeep(newAttrPtr);
    let randVarNum = Math.floor(Math.random() * newAttr.variations.length);
    let randVarPtr = newAttr.variations[randVarNum];
    let randVar = _.cloneDeep(randVarPtr);
    let params = randVar.paramsStable;
    let initVals = (newAttr.type == "2d")? randVar.initVals : randVar.initVals3D;
    let view = (newAttr.type == "2d")? null : VIEWS[Math.floor(Math.random() * VIEWS.length)];
    let timeDelta = (newAttr.type == "2d")? null : randVar.dt;
    let numIter = randVar.iterStable;
    this.setState({
      attractor: newAttr,
      params: params,
      initVals: initVals,
      variation: randVar,
      view: view,
      timeDelta: timeDelta,
      varNumber: randVarNum,
      numIter: numIter
    });
    //return new data in object
    return {
      attractor: newAttr,
      params: params,
      initVals: initVals,
      variation: randVar,
      view: view,
      timeDelta: timeDelta,
      varNumber: randVarNum,
      numIter: numIter
    }
  }

  handleVariationChange = (newVarNumber) => {
    let newVariationPtr = this.state.attractor.variations[newVarNumber];
    let newVariation = _.cloneDeep(newVariationPtr);
    let newParams = newVariation.paramsStable;
    let newInitVals = newVariation.initVals;
    let newNumIter = newVariation.iterStable;
    this.setState({
      variation: newVariation,
      params: newParams,
      initVals: newInitVals,
      varNumber: newVarNumber,
      numIter: newNumIter
    })
    //return new data in object
    return {
      variation: newVariation,
      params: newParams,
      initVals: newInitVals,
      varNumber: newVarNumber,
      numIter: newNumIter
    }
  }

  handleViewChange = (newView) => {
    this.setState({
      view: newView,
    })
  }

  handleRender = (newState) => {
    //renders push state of params, initVals, deltaTime (if exists)
    //only need to update deltatime (others update since arr references)
    this.setState({
      timeDelta: newState.currTimeDelta,
      numIter: newState.currNumIter
    })
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