import {React, Component} from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { globalPalette } = theme;

const StyledOutputContainer = styled.div`
  width: 100%;
  // background: ${globalPalette.white};
  border-top: 15px solid ${globalPalette.white};
  border-right: 15px solid ${globalPalette.white};
  border-bottom: 15px solid ${globalPalette.white};
`;

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledOutputContainer>
      </StyledOutputContainer>
    )
  }
}

export default Output;