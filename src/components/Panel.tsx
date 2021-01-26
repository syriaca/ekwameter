import React from 'react';
import styled from 'styled-components';

  const StyledPanel = styled.div`
      background-color: #fff;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.05);
      padding: ${(props) => props.theme.spacing['4']};
  `;

const Panel = ({children}: PanelProps) =>
    
    <StyledPanel> {children} </StyledPanel>;

export default Panel;
