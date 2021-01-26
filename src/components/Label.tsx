import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.p`
    display: none;

    @media (min-width: ${(props) => props.theme.screens.md}) {
        display: block;
        font-size: ${(props) => props.theme.textSizes['md']};
        margin: 0 0 ${(props) => props.theme.spacing['2']};
    }
`;

const Label = ({ text }: LabelProps) =>
    
    <StyledLabel>
        {text}
    </StyledLabel>

export default Label;
