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
  border: 15px solid ${globalPalette.white};
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
      attractor: this.props.attractor,
      params: this.props.params,
      initVals: this.props.initVals,
      variation: this.props.variation,
      view: this.props.view,
      timeDelta: this.props.timeDelta,
      varNumber: this.props.varNumber,
    };

    console.log("props: ", this.props)

  }

  handleAttractorChange = (e) => {
    console.log(e.target.value);
    //get attractor from list and rerender
    let attr = attractors.filter(att => att.name == e.target.value);
    console.log(attr);
    //send state up
  }

  handleParamChange = (e, i) => {
    console.log(Number(e.target.value));
    let newParams = this.state.params;
    newParams[i] = Number(e.target.value);
    this.setState({ params: newParams });
  }

  handleInitValChange = (e, i) => {
    console.log(Number(e.target.value));
    let newInitVals = this.state.initVals;
    newInitVals[i] = Number(e.target.value);
    this.setState({ initVals: newInitVals });
  }

  handleViewChange = (e) => {
    this.setState({ view: e.target.value })
  }

  handleVariationChange = (e) => {
    //need to clean reset
    let attr = e.target.value;

  }

  render() {
    let codeBlk;
    if (this.state.attractor.name == "Symmetric Icon") {
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
    if (this.state.attractor.type == "3d") {
      alternateViewsCtrl =
        <FormControl >
          <InputLabel> View </InputLabel>
          <Select
            labelId="attractor-select-label"
            id="attractor-select"
            value={this.state.view}
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
            defaultValue={this.state.varNumber}
            onChange={this.handleViewChange}
          >
            {this.state.attractor.variations.map((attr, i) => {
              return <MenuItem value={i}>Sample Variation {i}</MenuItem>
            })}
          </Select>
        </FormControl>
    }

    return (
      <StyledMenuContainer>

        <StyledTitle>
          Attractor: {this.state.attractor.name}
        </StyledTitle>

        {/* code block component */}
        {codeBlk}

        <StyledEquations>
          {this.state.attractor.equations.map(eqn => {
            return <Latex displayMode={true}>{eqn}</Latex>
          })}
        </StyledEquations>

        <FormControl>
          <InputLabel> Strange Attractor </InputLabel>
          <Select
            labelId="attractor-select-label"
            id="attractor-select"
            value={this.state.attractor.name}
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
          {this.state.params.map((param, i) => {
            let paramLabels = ["a", "b", "c", "d", "e", "f"]
            let cls = `param-input-${i}`
            return (
              <StyledParamInput>
                <StyledParamLabel> {paramLabels[i]} </StyledParamLabel>
                <TextField
                  id="standard-required"
                  className={cls}
                  defaultValue={this.state.params[i]}
                  onChange={(e) => this.handleParamChange(e, i)}
                />
              </StyledParamInput>
            )
          })}
        </StyledParamContainer>

        <StyledParamContainer id="preButtonContainer">
          <StyledSubtitle> Starting Values</StyledSubtitle>
          {this.state.initVals.map((param, i) => {
            let valLabels = ["x", "y", "z"]
            let cls = `initVal-input-${i}`
            return (
              <StyledParamInput>
                <StyledParamLabel> {valLabels[i]} </StyledParamLabel>
                <TextField
                  id="standard-required"
                  className={cls}
                  defaultValue={this.state.initVals[i]}
                  onChange={(e) => this.handleInitValChange(e, i)}
                />
              </StyledParamInput>
            )
          })}
        </StyledParamContainer>


        <Button variant="contained">Render!</Button>

      </StyledMenuContainer>
    )
  }
}

export default Menu;