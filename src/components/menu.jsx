import { FormControl, MenuItem } from '@material-ui/core';
import { React, Component } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Latex from 'react-latex';
import { CodeBlock, atomOneLight } from "react-code-blocks";


import ATTRACTORS from '../data/attractors';
import VIEWS from '../data/views';
import attractors from './attr_frames';
import './menu.css';

const { globalPalette } = theme;

const StyledMenuContainer = styled.div`
  width: 450px;
  min-width: 350px;
  height: 100vh;
  border: 15px solid ${globalPalette.veryLightGrey};
  padding: 10px;
  padding-bottom: 20px;

  overflow-y: scroll;
  overflow-x: scroll;
`;

const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: black;
  padding: 10px;
`;

const StyledCodeContainer = styled.div`
  text-align: left;
  font-size: 11px;
`;

const StyledEquations = styled.div`
  font-size: 12px;
  color: black;
  padding: 10px;
`;

const StyledParamInput = styled.div`
  display: flex;
  padding-top: 10px;
`;

const StyledParamLabel = styled.div`
  font-size: 15px;
  color: black;
  text-align: center;
  width: 50px;
  margin: auto;
`;

const StyledParamContainer = styled.div`
  padding-top: 20px;
`;

const StyledSubtitle = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currParams: this.props.params,
      currInitVals: this.props.initVals,
      currTimeDelta: this.props.timeDelta,
      currNumIter: this.props.numIter,
    }

  }

  handleAttractorChange = (e) => {
    console.log(e.target.value);
    //get attractor from list and rerender
    let attr = attractors.filter(att => att.name == e.target.value);
    console.log(attr[0]);
    //send state up
    this.props.changeAttractor(attr[0]);
  }
  handleViewChange = (e) => {
    console.log("view: ", e.target.value);
    this.props.changeView(e.target.value);
  }
  handleVariationChange = (e) => {
    //need to clean reset
    console.log("new variation: ", e.target.value)
    let attr = e.target.value;
    this.props.changeVariation(e.target.value);
  }


  handleParamChange = (e, i) => {
    // if (isNaN(e.target.value)) return;
    console.log(e.target.value);
    let newParams = this.props.params;
    newParams[i] = e.target.value;
    this.setState({ currParams: newParams });
  }
  handleInitValChange = (e, i) => {
    // if (isNaN(e.target.value)) return;
    console.log(e.target.value);
    let newInitVals = this.props.initVals;
    newInitVals[i] = e.target.value;
    this.setState({ currInitVals: newInitVals });
  }
  handleDeltaChange = (e) => {
    // if (isNaN(e.target.value)) return;
    this.setState({ currTimeDelta: e.target.value })
  }
  handleNumIterChange = (e) => {
    this.setState({ currNumIter: e.target.value })
  }

  handleRender = (e) => {
    //push state up
    this.props.renderAttr(this.state);
  }

  render() {

    console.log("menu props", this.props);
    console.log("menu state", this.state);

    let codeBlk;
    if (this.props.attractor.name == "Symmetric Icon") {
      codeBlk =
        <StyledCodeContainer>
          <CodeBlock
            text={
              `calcPoint(x, y, a, b, g, om, l, d) {
    zzbar = x**2 + y**2;
    p = a*zzbar + l;
    zreal = x, zimag = y;       
    for (i = 1; i < d-1; i++) {
        za = zreal*x - zimag*y;
        zb = zimag*x + zreal*y;
        zreal = za;
        zimag = zb;
    }
    xNext = p*x + g*zreal - om*y
    yNext = p*y - g*zimag + om*x
}
`}
            language={'javascript'}
            theme={'atomOneLight'}
            id="codeBlock"
          >
          </CodeBlock>
        </StyledCodeContainer>
    } else {
      codeBlk = null;
    }

    let alternateViewsCtrl;
    if (this.props.attractor.type == "3d") {
      alternateViewsCtrl =
        <FormControl >
          <InputLabel> View </InputLabel>
          <Select
            labelId="attractor-select-label"
            id="attractor-select"
            value={this.props.view}
            onChange={this.handleViewChange}
          >
            {VIEWS.map(view => {
              return <MenuItem value={view}>{view}</MenuItem>
            })}
          </Select>
        </FormControl>
    } else {
      alternateViewsCtrl =
        <FormControl >
          <InputLabel> Variation </InputLabel>
          <Select
            labelId="attractor-select-label"
            id="attractor-select"
            value={this.props.varNumber}
            onChange={this.handleVariationChange}
          >
            {this.props.attractor.variations.map((attr, i) => {
              return <MenuItem value={i}> Sample Variation {i} </MenuItem>
            })}
          </Select>
        </FormControl>
    }

    return (
      <StyledMenuContainer>

        <StyledTitle>
          Attractor: {this.props.attractor.name}
        </StyledTitle>

        {/* code block component */}
        {codeBlk}

        <StyledEquations>
          {this.props.attractor.equations.map(eqn => {
            return <Latex displayMode={true}>{eqn}</Latex>
          })}
        </StyledEquations>

        <FormControl>
          <InputLabel> Strange Attractor </InputLabel>
          <Select
            labelId="attractor-select-label"
            id="attractor-select"
            value={this.props.attractor.name}
            onChange={this.handleAttractorChange}
          >
            {ATTRACTORS.map(attr => {
              return <MenuItem value={attr}>{attr}</MenuItem>
            })}
          </Select>
        </FormControl>

        {/* variation or view ctrl */}
        {alternateViewsCtrl}

        <StyledParamContainer>
          <StyledSubtitle> Parameters</StyledSubtitle>
          {this.props.params.map((param, i) => {
            let paramLabels = ["a", "b", "c", "d", "e", "f"]
            let cls = `param-input-${i}`
            return (
              <StyledParamInput>
                <StyledParamLabel> {paramLabels[i]} </StyledParamLabel>
                <TextField
                  id="standard-required"
                  className={cls}
                  value={this.props.params[i]}
                  onChange={(e) => this.handleParamChange(e, i)}
                />
              </StyledParamInput>
            )
          })}
          {/* add dt ctrl */}
          {this.props.attractor.type == "3d" &&
            <StyledParamInput>
              <StyledParamLabel> dt </StyledParamLabel>
              <TextField
                id="standard-required"
                className={'param-input-dt'}
                defaultValue={this.props.timeDelta}
                onChange={(e) => this.handleDeltaChange(e)}
              />
            </StyledParamInput>
          }
          <StyledParamInput>
            <StyledParamLabel id="numIterLabel"> Number of Iterations </StyledParamLabel>
            <TextField
              id="standard-required"
              className={'param-input-numIter'}
              defaultValue={this.props.numIter}
              onChange={(e) => this.handleNumIterChange(e)}
            />
          </StyledParamInput>

        </StyledParamContainer>

        <StyledParamContainer id="preButtonContainer">
          <StyledSubtitle> Starting Values</StyledSubtitle>
          {this.props.initVals.map((param, i) => {
            let valLabels = ["x", "y", "z"]
            let cls = `initVal-input-${i}`
            return (
              <StyledParamInput>
                <StyledParamLabel> {valLabels[i]} </StyledParamLabel>
                <TextField
                  id="standard-required"
                  className={cls}
                  value={this.props.initVals[i]}
                  onChange={(e) => this.handleInitValChange(e, i)}
                />
              </StyledParamInput>
            )
          })}
        </StyledParamContainer>


        <Button variant="contained" onClick={this.handleRender}> Render! </Button>

      </StyledMenuContainer>
    )
  }
}

export default Menu;